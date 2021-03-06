import { Button } from "@material-ui/core";
import axios from "axios";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useState, useEffect } from "react";
import styled from "styled-components";

import { DateField, SelectField } from "./Components";

export const App = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [dateRange, setDateRange] = useState({
        from: null,
        to: null
    });
    const [isFetching, setIsFetching] = useState(false);
    const [total, setTotal] = useState(null);
    const [report, setReport] = useState([]);
    const [options, setOptions] = useState({
        title: {
          text: ''
        },
        xAxis: {
            categories: []
        },
        series: []
    });
    const [isShowChart, setIsShowChart] = useState(false);

    // effect handler
    const fetchCountries = async () => {
        try {
            const res = await axios.get("https://api.covid19api.com/countries");
            setCountries(res.data);
        } catch (err) {
            console.log(err.response);
        }
    };
    // console.log(dateRange);

    const fetchReport = async () => {
        try {
            setIsFetching(true);
            const dateFrom = dateRange.from ? new Date(new Date(dateRange.from).setDate(new Date(dateRange.from).getDate() - 1)).toISOString() : new Date().toISOString();
            const dateTo = dateRange.to ? new Date(dateRange.to).toISOString() : new Date().toISOString();
            const res = await axios.get(`
                https://api.covid19api.com/country/${selectedCountry.Slug}?from=${dateFrom}&to=${dateTo}
            `);
            setReport(res.data);
            if (!res.data.length) {
                setTotal(null);
            }
            const chartTitle = selectedCountry.Country;
            const _dateRange = res.data.map(data => new Date(data.Date).toDateString());
            const deaths = res.data.map(data => data.Deaths);
            const recovereds = res.data.map(data => data.Recovered);
            const confirmeds = res.data.map(data => data.Confirmed);
            // const 
            setOptions({
                title: {
                  text: chartTitle
                },
                xAxis: {
                    title: {
                        text: 'Ng??y'
                    },
                    categories: _dateRange
                },
                yAxis: {
                    title: {
                        text: 'S??? ca'
                    }
                },
                series: [
                    {
                        name: "S??? ca nhi???m",
                        data: confirmeds,
                        color: "#f00"
                    },
                    {
                        name: "S??? ca t??? vong",
                        data: deaths,
                        color: "#000"
                    },
                    {
                        name: "S??? ca ph???c h???i",
                        data: recovereds,
                        color: "#0f0"
                    },
                ]
            });
            setIsShowChart(true);
        } catch (err) {
            console.log(err.response);
        } finally {
            setIsFetching(false);
        }
    };


    const fetchReportNow = async () => {
        try {
            // const dateFrom = new Date(new Date().setDate(new Date().getDate() - 2)).toISOString();
            // const dateTo = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString();
            const res = await axios.get(`
                https://api.covid19api.com/total/country/${selectedCountry.Slug}
            `);
            if (res.data.length) {
                setTotal({
                    deaths: res.data[res.data.length - 1].Deaths,
                    confirmeds: res.data[res.data.length - 1].Confirmed,
                    recovereds: res.data[res.data.length - 1].Recovered
                });
            }
        } catch (err) {
            console.log(err);
        }
    };
    // effect handler

    // effect
    useEffect(() => {
        fetchCountries();
    }, []);

    useEffect(() => {
        if (selectedCountry) {
            fetchReport();
            fetchReportNow();
        } else {
            setTotal(null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dateRange, selectedCountry]);
    // effect

    // handle function
    const handleChange = (e, value) => {
        setSelectedCountry(value);
    };

    const handleChangeDateFrom = (date) => {
        
        setDateRange({
            ...dateRange,
            from: date
        });
    };

    const handleChangeDateTo = (date) => {
        
        setDateRange({
            ...dateRange,
            to: date
        });
    };
    // handle function

    return (
        <Container className="App">
            <div className="choseOptions">
                <div className="flexItem country">
                    <SelectField 
                        options={countries}
                        selectedValue={selectedCountry}
                        label="Ch???n qu???c gia"
                        onChange={handleChange}
                    />
                </div>
                <div className="flexItem date">
                    <DateField 
                        label="From"
                        value={dateRange.from}
                        onChange={handleChangeDateFrom}
                        maxDate={dateRange.to ? new Date(dateRange.to) : null}
                    />
                    <Button variant="contained" color="primary" className="reset" onClick={() => setDateRange({
                        ...dateRange,
                        from: null
                    })}>Reset date from</Button>
                </div>
                <div className="flexItem date">
                    <DateField 
                        label="To"
                        value={dateRange.to}
                        onChange={handleChangeDateTo}
                    />
                    <Button variant="contained" color="primary" className="reset" onClick={() => setDateRange({
                        ...dateRange,
                        to: null
                    })}>Reset date to</Button>
                </div>
            </div>
            {total ? (
                <div className="total">
                    <p>T???ng s??? ca nhi???m: {total.confirmeds.toLocaleString()}</p>
                    <p>T???ng s??? ca t??? vong: {total.deaths.toLocaleString()}</p>
                </div>
            ) : (
                <div className="total">
                    <p>T???ng s??? ca nhi???m:</p>
                    <p>T???ng s??? ca t??? vong:</p>
                </div>
            )}
            {isShowChart && selectedCountry ? report.length ? (
                <div className="chart">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                    />
                    <span className="api">
                        Api document: <a href="https://documenter.getpostman.com/view/10808728/SzS8rjbc" target="_blank">https://documenter.getpostman.com/view/10808728/SzS8rjbc</a>
                    </span>
                </div>
            ) : (
                <p className="noReport" style={{ display: isFetching ? "none" : "" }}>Kh??ng c?? th???ng k?? c???a {selectedCountry.Country}</p>
            ) : (
                <div className="chart">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={{
                            title: {
                              text: 'Bi???u ?????'
                            },
                            xAxis: {
                                title: {
                                    text: 'Ng??y'
                                },
                                categories: []
                            },
                            yAxis: {
                                title: {
                                    text: 'S??? ca'
                                }
                            },
                            series: [
                                {
                                    name: "S??? ca nhi???m",
                                    data: [],
                                    color: "#f00"
                                },
                                {
                                    name: "S??? ca t??? vong",
                                    data: [],
                                    color: "#000"
                                },
                                {
                                    name: "S??? ca ph???c h???i",
                                    data: [],
                                    color: "#0f0"
                                },
                            ]
                          }}
                    />
                    <span className="api">
                        Api document: <a href="https://documenter.getpostman.com/view/10808728/SzS8rjbc" target="_blank">https://documenter.getpostman.com/view/10808728/SzS8rjbc</a>
                    </span>
                </div>
            )}
        </Container>
    );
};

const Container = styled.div`
    .choseOptions {
        display: flex;

        @media (max-width: 540px) {
            flex-direction: column;
        }
    }

    .flexItem {
        flex: 1;
        padding: 0 20px;
    }

    .date {
        /* padding-top: 15px; */
    }

    .chart {
        padding: 30px 40px;

        @media (max-width: 540px) {
            padding: 30px;
        }

        @media (max-width: 376px) {
            padding: 20px;
        }
    }

    .total {
        padding-left: 20px;
    }

    .noReport {
        padding-left: 10px;
    }

    .api {
        display: inline-block;
        max-width: 100%;
        overflow-x: hidden;
        text-overflow: ellipsis;
    }
`;