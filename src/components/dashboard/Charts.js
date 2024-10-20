import styles from '../../styles/dashboard.module.css'
import { useEffect, useState } from "react";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel, VictoryLine, VictoryTheme, VictoryZoomContainer } from "victory";


export default function Charts({filterOption}) {
    const age = filterOption.age;
    const gender = filterOption.gender;
    const startDate = filterOption.startDate;
    const endDate = filterOption.endDate;

    console.log(filterOption)

    const [filtered, setFiltered] = useState(undefined)
    const [barChartData, setBarChartData] = useState(undefined);
    const [lineChartData, setLineChartData] = useState(undefined);
    const [selectedFeature, setSelectedFeature] = useState(undefined)

    const formatData = (data) => {
        const formattedData = data.map((item) => {
            const [day, month, year] = item.Day.split('/');
            return {
                ...item,
                Day: (`${month}/${day}/${year}`).toString()
            }
        })
        return formattedData;
    }

    useEffect(() => {
        const fetchData = async () => {
            setLineChartData(undefined)
            const response = await fetch('/api/data');
            const resData = await response.json(); 

            const formattedData = formatData(resData);

            const filteredData = formattedData.filter((item) => {
                let ageMatch = age ? (age === item.Age) : true
                let genderMatch = gender ? (gender === item.Gender) : true
                const itemDate = new Date(item.Day);
                let startMatch, endMatch;
                if(startDate){
                    const start = new Date(startDate);
                    startMatch = itemDate >= start;
                }else {
                    startMatch = true
                };
                if(endDate){
                    const end = new Date(endDate);
                    endMatch = itemDate <= end;
                }else {
                    endMatch = true
                };
                return (startMatch && endMatch) && (genderMatch) && (ageMatch);
            });


            setFiltered(filteredData)
    
            const aggregatedData = filteredData.reduce((acc, item) => {
                for (const feature of ['A', 'B', 'C', 'D', 'E', 'F']) {
                    const time = parseInt(item[feature]);
                    acc[feature] = (acc[feature] || 0) + time;
                  }

                return acc;
              }, {});

            const finalChartData = Object.keys(aggregatedData).map((feature) => ({
                feature: feature,
                time: parseInt(aggregatedData[feature]),
            }));
            setBarChartData(finalChartData)
        }
        fetchData()

    },[age, gender, startDate, endDate])

 
    function generateLineChartData(index){
        let clicked = ['A', 'B', 'C', 'D', 'E', 'F'];
        const timeSpentData = filtered.map((item) => {
            const [day, month, year] = item.Day.split('/');
            return { x: (`${month}/${day}`).toString(), y: parseInt(item[clicked[index]]) }
        });
        setSelectedFeature(clicked[index]);
        // setLineChartData(timeSpentData)
        console.log(timeSpentData)

        const groupedData = timeSpentData.reduce((acc, item) => {
            const key = item.x; // Assuming 'x' represents the date
            acc[key] = acc[key] || { x: item.x, y: 0, count: 0 };
            acc[key].y += item.y;
            acc[key].count++;
            return acc;
          }, {});
    
          const totalTimeSpentDataForMultipleValues = Object.values(groupedData).map(item => ({
            x: item.x,
            // y: item.y / item.count
            y: item.y
          }));
          setLineChartData(totalTimeSpentDataForMultipleValues)
          console.log(totalTimeSpentDataForMultipleValues)

      
    }

    return <div className={styles.chartsContainer} >

        { barChartData && <div className={styles.chart}>
            <p className={styles.chartName}>Total Time Spent on Features</p>
            <VictoryChart domainPadding={{ x: 20 }} 
                height={500}
                width={500}  
                theme={VictoryTheme.grayscale}>
                <VictoryAxis  label="Feature" />
                <VictoryAxis dependentAxis label="Total Time" />
                <VictoryBar 
                    events={[{
                        target: "data",
                        eventHandlers: {
                            onClick: (datum) => {
                                const clickedPath = event.target; 
                                if (clickedPath.tagName === 'path') {
                                    const index = clickedPath.getAttribute('index');
                                    console.log("Clicked bar index:", index);
                                    generateLineChartData(index)                                    
                                }
                                console.log(lineChartData)
                            }
                        }
                    }]}
                    animate={{
                        duration: 1000,
                        easing: "linear",
                        onLoad: { duration: 500 },
                    }}
                    // labels={({ datum }) => datum.time}
                    style={{ 
                        data: { fill: "red", fontSize: 10 },
                        labels: { fill: "red", fontSize: 10 }
                    }}
                    horizontal
                    data={barChartData} 
                    x="feature"
                    y="time"
                />
        
            </VictoryChart>
        </div>}
    
         {lineChartData && <div className={styles.chart}>
            <p className={styles.chartName}>Time Trend of Feature {selectedFeature}</p>
            <VictoryChart 
                containerComponent={<VictoryZoomContainer zoomDimension='x'/>}
                // animate={{
                //     duration: 20,
                //     onLoad: { duration: 10 }
                // }}
                height={500}
                width={500}  
                theme={VictoryTheme.grayscale}
            >
                <VictoryAxis  label="days"  tickCount={5} />
                <VictoryAxis dependentAxis label="Total Time"tickCount={10} />
                <VictoryLine
                    animate={{
                        duration: 500,
                        onLoad: { duration: 500 },
                    }}
                    data={lineChartData}
                    style={{ 
                        data: { stroke: "blue" },
                        labels: { fill: "red", fontSize: 10 },
                    }}
                    x="x"
                    y="y"
                />
            </VictoryChart>
       </div>}
     
       
        

    </div>
}
    