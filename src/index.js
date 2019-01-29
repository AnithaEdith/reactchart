import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import fusioncharts from 'fusioncharts';
// Load the charts module
import charts from 'fusioncharts/fusioncharts.charts';
import theme from 'fusioncharts/themes/fusioncharts.theme.fint';
import ReactFC from 'react-fusioncharts';

charts(fusioncharts);
theme(fusioncharts);


var chartConfigs = {
  type: "Column2D",
  className: "fc-column2d",
  id: "mychart",
  dataFormat: "JSON",
  dataSource: {
    "chart": {
      "caption": "Annual Sales Summary (2010-2013)",
      "subcaption": "Click on a column to drill-down",
      "numberprefix": "$",
      "showvalues": "0",
      "bgcolor": "FFFFFF",
      "xaxisname": "Year",
      "plotgradientcolor": "",
      "showalternatehgridcolor": "0",
      "showplotborder": "0",
      "divlinecolor": "CCCCCC",
      "canvasborderalpha": "0"
    },
    "data": [
      {
        "label": "2010",
        "value": "1161000",
        "link": "newchart-xml-2010Quarters",
        "color": "008ee4"
      },
      {
        "label": "2011",
        "value": "1043000",
        "link": "newchart-xml-2011Quarters",
        "color": "6baa01"
      },
      {
        "label": "2012",
        "value": "1017000",
        "link": "newchart-xml-2012Quarters",
        "color": "f8bd19"
      },
      {
        "label": "2013",
        "value": "1156000",
        "link": "newchart-xml-2013Quarters",
        "color": "e44a00"
      }
    ],
    "linkeddata": [
      {
        "id": "2010Quarters",
        "linkedchart": {
          "chart": {
            "caption": "Quarterly Sales Summary (2010)",
            "subcaption": "Click on a column to drill-down",
            "xaxisname": "Quarter",
            "yaxisname": "Sales",
            "numberprefix": "$",
            "showvalues": "0",
            "bgcolor": "FFFFFF",
            "plotgradientcolor": "",
            "showalternatehgridcolor": "0",
            "showplotborder": "0",
            "divlinecolor": "CCCCCC",
            "canvasborderalpha": "0"
          },
          "data": [
            {
              "label": "Q1",
              "value": "274000",
              "link": "newchart-xml-2010Q1",
              "color": "008ee4"
            },
            {
              "label": "Q2",
              "value": "270000",
              "link": "newchart-xml-2010Q2",
              "color": "008ee4"
            },
            {
              "label": "Q3",
              "value": "318000",
              "link": "newchart-xml-2010Q3",
              "color": "008ee4"
            },
            {
              "label": "Q4",
              "value": "299000",
              "link": "newchart-xml-2010Q4",
              "color": "008ee4"
            }
          ],
          "linkeddata": [
            {
              "id": "2010Q1",
              "linkedchart": {
                "chart": {
                  "caption": "Monthly Sales Summary",
                  "subcaption": "For the first quarter of year 2010",
                  "xaxisname": "Month",
                  "yaxisname": "Sales",
                  "numberprefix": "$",
                  "showvalues": "0",
                  "bgcolor": "FFFFFF",
                  "plotgradientcolor": "",
                  "showalternatehgridcolor": "0",
                  "showplotborder": "0",
                  "divlinecolor": "CCCCCC",
                  "canvasborderalpha": "0"
                },
                "data": [
                  {
                    "label": "January",
                    "value": "110000",
                    "color": "008ee4"
                  },
                  {
                    "label": "February",
                    "value": "76000",
                    "color": "008ee4"
                  },
                  {
                    "label": "March",
                    "value": "88000",
                    "color": "008ee4"
                  }
                ]
              }
            },
            {
              "id": "2010Q2",
              "linkedchart": {
                "chart": {
                  "caption": "Monthly Sales Summary",
                  "subcaption": "For the second quarter of year 2010",
                  "xaxisname": "Month",
                  "yaxisname": "Sales",
                  "numberprefix": "$",
                  "showvalues": "0",
                  "bgcolor": "FFFFFF",
                  "plotgradientcolor": "",
                  "showalternatehgridcolor": "0",
                  "showplotborder": "0",
                  "divlinecolor": "CCCCCC",
                  "canvasborderalpha": "0"
                },
                "data": [
                  {
                    "label": "April",
                    "value": "116000",
                    "color": "008ee4"
                  },
                  {
                    "label": "May",
                    "value": "92000",
                    "color": "008ee4"
                  },
                  {
                    "label": "June",
                    "value": "62000",
                    "color": "008ee4"
                  }
                ]
              }
            },
            {
              "id": "2010Q3",
              "linkedchart": {
                "chart": {
                  "caption": "Monthly Sales Summary",
                  "subcaption": "For the third quarter of year 2010",
                  "xaxisname": "Month",
                  "yaxisname": "Sales",
                  "numberprefix": "$",
                  "showvalues": "0",
                  "bgcolor": "FFFFFF",
                  "plotgradientcolor": "",
                  "showalternatehgridcolor": "0",
                  "showplotborder": "0",
                  "divlinecolor": "CCCCCC",
                  "canvasborderalpha": "0"
                },
                "data": [
                  {
                    "label": "July",
                    "value": "114000",
                    "color": "008ee4"
                  },
                  {
                    "label": "August",
                    "value": "86000",
                    "color": "008ee4"
                  },
                  {
                    "label": "September",
                    "value": "118000",
                    "color": "008ee4"
                  }
                ]
              }
            },
            {
              "id": "2010Q4",
              "linkedchart": {
                "chart": {
                  "caption": "Monthly Sales Summary",
                  "subcaption": "For the fourth quarter of year 2010",
                  "xaxisname": "Month",
                  "yaxisname": "Sales",
                  "numberprefix": "$",
                  "showvalues": "0",
                  "bgcolor": "FFFFFF",
                  "plotgradientcolor": "",
                  "showalternatehgridcolor": "0",
                  "showplotborder": "0",
                  "divlinecolor": "CCCCCC",
                  "canvasborderalpha": "0"
                },
                "data": [
                  {
                    "label": "October",
                    "value": "92000",
                    "color": "008ee4"
                  },
                  {
                    "label": "November",
                    "value": "102000",
                    "color": "008ee4"
                  },
                  {
                    "label": "December",
                    "value": "105000",
                    "color": "008ee4"
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "id": "2011Quarters",
        "linkedchart": {
          "chart": {
            "caption": "Quarterly Sales Summary (2011)",
            "subcaption": "Click on a column to drill-down",
            "yaxisname": "Sales",
            "showvalues": "0",
            "bgcolor": "FFFFFF",
            "numberprefix": "$",
            "xaxisname": "Year",
            "plotgradientcolor": "",
            "showalternatehgridcolor": "0",
            "showplotborder": "0",
            "divlinecolor": "CCCCCC",
            "canvasborderalpha": "0"
          },
          "data": [
            {
              "label": "Q1",
              "value": "306000",
              "link": "newchart-xml-2011Q1",
              "color": "6baa01"
            },
            {
              "label": "Q2",
              "value": "203000",
              "link": "newchart-xml-2011Q2",
              "color": "6baa01"
            },
            {
              "label": "Q3",
              "value": "270000",
              "link": "newchart-xml-2011Q3",
              "color": "6baa01"
            },
            {
              "label": "Q4",
              "value": "264000",
              "link": "newchart-xml-2011Q4",
              "color": "6baa01"
            }
          ],
          "linkeddata": [
            {
              "id": "2011Q1",
              "linkedchart": {
                "chart": {
                  "caption": "Monthly Sales Summary",
                  "subcaption": "For the first quarter of year 2011",
                  "yaxisname": "Sales",
                  "showvalues": "0",
                  "bgcolor": "FFFFFF",
                  "numberprefix": "$",
                  "xaxisname": "Year",
                  "plotgradientcolor": "",
                  "showalternatehgridcolor": "0",
                  "showplotborder": "0",
                  "divlinecolor": "CCCCCC",
                  "canvasborderalpha": "0"
                },
                "data": [
                  {
                    "label": "January",
                    "value": "370000",
                    "color": "6baa01"
                  },
                  {
                    "label": "February",
                    "value": "290000",
                    "color": "6baa01"
                  },
                  {
                    "label": "March",
                    "value": "320000",
                    "color": "6baa01"
                  }
                ]
              }
            },
            {
              "id": "2011Q2",
              "linkedchart": {
                "chart": {
                  "caption": "Monthly Sales Summary",
                  "subcaption": "For the second quarter of year 2011",
                  "yaxisname": "Sales",
                  "showvalues": "0",
                  "bgcolor": "FFFFFF",
                  "numberprefix": "$",
                  "xaxisname": "Year",
                  "plotgradientcolor": "",
                  "showalternatehgridcolor": "0",
                  "showplotborder": "0",
                  "divlinecolor": "CCCCCC",
                  "canvasborderalpha": "0"
                },
                "data": [
                  {
                    "label": "April",
                    "value": "370000",
                    "color": "6baa01"
                  },
                  {
                    "label": "May",
                    "value": "290000",
                    "color": "6baa01"
                  },
                  {
                    "label": "June",
                    "value": "320000",
                    "color": "6baa01"
                  }
                ]
              }
            },
            {
              "id": "2011Q3",
              "linkedchart": {
                "chart": {
                  "caption": "Monthly Sales Summary",
                  "subcaption": "For the third quarter of year 2011",
                  "yaxisname": "Sales",
                  "showvalues": "0",
                  "bgcolor": "FFFFFF",
                  "numberprefix": "$",
                  "xaxisname": "Year",
                  "plotgradientcolor": "",
                  "showalternatehgridcolor": "0",
                  "showplotborder": "0",
                  "divlinecolor": "CCCCCC",
                  "canvasborderalpha": "0"
                },
                "data": [
                  {
                    "label": "July",
                    "value": "370000",
                    "color": "6baa01"
                  },
                  {
                    "label": "August",
                    "value": "290000",
                    "color": "6baa01"
                  },
                  {
                    "label": "September",
                    "value": "320000",
                    "color": "6baa01"
                  }
                ]
              }
            },
            {
              "id": "2011Q4",
              "linkedchart": {
                "chart": {
                  "caption": "Monthly Sales Summary",
                  "subcaption": "For the fourth quarter of year 2011",
                  "yaxisname": "Sales",
                  "showvalues": "0",
                  "bgcolor": "FFFFFF",
                  "numberprefix": "$",
                  "xaxisname": "Year",
                  "plotgradientcolor": "",
                  "showalternatehgridcolor": "0",
                  "showplotborder": "0",
                  "divlinecolor": "CCCCCC",
                  "canvasborderalpha": "0"
                },
                "data": [
                  {
                    "label": "October",
                    "value": "370000",
                    "color": "6baa01"
                  },
                  {
                    "label": "November",
                    "value": "290000",
                    "color": "6baa01"
                  },
                  {
                    "label": "December",
                    "value": "320000",
                    "color": "6baa01"
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "id": "2012Quarters",
        "linkedchart": {
          "chart": {
            "caption": "Quarterly Sales Summary (2012)",
            "subcaption": "Click on a column to drill-down",
            "yaxisname": "Sales",
            "showvalues": "0",
            "bgcolor": "FFFFFF",
            "numberprefix": "$",
            "xaxisname": "Year",
            "plotgradientcolor": "",
            "showalternatehgridcolor": "0",
            "showplotborder": "0",
            "divlinecolor": "CCCCCC",
            "canvasborderalpha": "0"
          },
          "data": [
            {
              "label": "Q1",
              "value": "241000",
              "link": "newchart-xml-2012Q1",
              "color": "f8bd19"
            },
            {
              "label": "Q2",
              "value": "280000",
              "link": "newchart-xml-2012Q2",
              "color": "f8bd19"
            },
            {
              "label": "Q3",
              "value": "255000",
              "link": "newchart-xml-2012Q3",
              "color": "f8bd19"
            },
            {
              "label": "Q4",
              "value": "241000",
              "link": "newchart-xml-2012Q4",
              "color": "f8bd19"
            }
          ],
          "linkeddata": [
            {
              "id": "2012Q1",
              "linkedchart": {
                "chart": {
                  "caption": "Monthly Sales Summary",
                  "subcaption": "For the first quarter of year 2012",
                  "yaxisname": "Sales",
                  "showvalues": "0",
                  "bgcolor": "FFFFFF",
                  "numberprefix": "$",
                  "xaxisname": "Year",
                  "plotgradientcolor": "",
                  "showalternatehgridcolor": "0",
                  "showplotborder": "0",
                  "divlinecolor": "CCCCCC",
                  "canvasborderalpha": "0"
                },
                "data": [
                  {
                    "label": "January",
                    "value": "87000",
                    "color": "f8bd19"
                  },
                  {
                    "label": "February",
                    "value": "89000",
                    "color": "f8bd19"
                  },
                  {
                    "label": "March",
                    "value": "65000",
                    "color": "f8bd19"
                  }
                ]
              }
            },
            {
              "id": "2012Q2",
              "linkedchart": {
                "chart": {
                  "caption": "Monthly Sales Summary",
                  "subcaption": "For the second quarter of year 2012",
                  "yaxisname": "Sales",
                  "showvalues": "0",
                  "bgcolor": "FFFFFF",
                  "numberprefix": "$",
                  "xaxisname": "Year",
                  "plotgradientcolor": "",
                  "showalternatehgridcolor": "0",
                  "showplotborder": "0",
                  "divlinecolor": "CCCCCC",
                  "canvasborderalpha": "0"
                },
                "data": [
                  {
                    "label": "April",
                    "value": "130000",
                    "color": "f8bd19"
                  },
                  {
                    "label": "May",
                    "value": "44000",
                    "color": "f8bd19"
                  },
                  {
                    "label": "June",
                    "value": "106000",
                    "color": "f8bd19"
                  }
                ]
              }
            },
            {
              "id": "2012Q3",
              "linkedchart": {
                "chart": {
                  "caption": "Monthly Sales Summary",
                  "subcaption": "For the third quarter of year 2012",
                  "yaxisname": "Sales",
                  "showvalues": "0",
                  "bgcolor": "FFFFFF",
                  "numberprefix": "$",
                  "xaxisname": "Year",
                  "plotgradientcolor": "",
                  "showalternatehgridcolor": "0",
                  "showplotborder": "0",
                  "divlinecolor": "CCCCCC",
                  "canvasborderalpha": "0"
                },
                "data": [
                  {
                    "label": "July",
                    "value": "85000",
                    "color": "f8bd19"
                  },
                  {
                    "label": "August",
                    "value": "103000",
                    "color": "f8bd19"
                  },
                  {
                    "label": "September",
                    "value": "67000",
                    "color": "f8bd19"
                  }
                ]
              }
            },
            {
              "id": "2012Q4",
              "linkedchart": {
                "chart": {
                  "caption": "Monthly Sales Summary",
                  "subcaption": "For the fourth quarter of year 2012",
                  "yaxisname": "Sales",
                  "showvalues": "0",
                  "bgcolor": "FFFFFF",
                  "numberprefix": "$",
                  "xaxisname": "Year",
                  "plotgradientcolor": "",
                  "showalternatehgridcolor": "0",
                  "showplotborder": "0",
                  "divlinecolor": "CCCCCC",
                  "canvasborderalpha": "0"
                },
                "data": [
                  {
                    "label": "October",
                    "value": "59000",
                    "color": "f8bd19"
                  },
                  {
                    "label": "November",
                    "value": "69000",
                    "color": "f8bd19"
                  },
                  {
                    "label": "December",
                    "value": "113000",
                    "color": "f8bd19"
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "id": "2013Quarters",
        "linkedchart": {
          "chart": {
            "caption": "Quarterly Sales Summary (2013)",
            "subcaption": "Click on a column to drill-down",
            "yaxisname": "Sales",
            "showvalues": "0",
            "bgcolor": "FFFFFF",
            "numberprefix": "$",
            "xaxisname": "Year",
            "plotgradientcolor": "",
            "showalternatehgridcolor": "0",
            "showplotborder": "0",
            "divlinecolor": "CCCCCC",
            "canvasborderalpha": "0"
          },
          "data": [
            {
              "label": "Q1",
              "value": "269000",
              "link": "newchart-xml-2013Q1",
              "color": "e44a00"
            },
            {
              "label": "Q2",
              "value": "270000",
              "link": "newchart-xml-2013Q2",
              "color": "e44a00"
            },
            {
              "label": "Q3",
              "value": "318000",
              "link": "newchart-xml-2013Q3",
              "color": "e44a00"
            },
            {
              "label": "Q4",
              "value": "299000",
              "link": "newchart-xml-2013Q4",
              "color": "e44a00"
            }
          ],
          "linkeddata": [
            {
              "id": "2013Q1",
              "linkedchart": {
                "chart": {
                  "caption": "Monthly Sales Summary",
                  "subcaption": "For the first quarter of year 2013",
                  "yaxisname": "Sales",
                  "showvalues": "0",
                  "bgcolor": "FFFFFF",
                  "numberprefix": "$",
                  "xaxisname": "Year",
                  "plotgradientcolor": "",
                  "showalternatehgridcolor": "0",
                  "showplotborder": "0",
                  "divlinecolor": "CCCCCC",
                  "canvasborderalpha": "0"
                },
                "data": [
                  {
                    "label": "January",
                    "value": "105000"
                  },
                  {
                    "label": "February",
                    "value": "76000"
                  },
                  {
                    "label": "March",
                    "value": "88000"
                  }
                ]
              }
            },
            {
              "id": "2013Q2",
              "linkedchart": {
                "chart": {
                  "caption": "Monthly Sales Summary",
                  "subcaption": "For the second quarter of year 2013",
                  "yaxisname": "Sales",
                  "showvalues": "0",
                  "bgcolor": "FFFFFF",
                  "numberprefix": "$",
                  "xaxisname": "Year",
                  "plotgradientcolor": "",
                  "showalternatehgridcolor": "0",
                  "showplotborder": "0",
                  "divlinecolor": "CCCCCC",
                  "canvasborderalpha": "0"
                },
                "data": [
                  {
                    "label": "April",
                    "value": "116000"
                  },
                  {
                    "label": "May",
                    "value": "92000"
                  },
                  {
                    "label": "June",
                    "value": "62000"
                  }
                ]
              }
            },
            {
              "id": "2013Q3",
              "linkedchart": {
                "chart": {
                  "caption": "Monthly Sales Summary",
                  "subcaption": "For the third quarter of year 2013",
                  "yaxisname": "Sales",
                  "showvalues": "0",
                  "bgcolor": "FFFFFF",
                  "numberprefix": "$",
                  "xaxisname": "Year",
                  "plotgradientcolor": "",
                  "showalternatehgridcolor": "0",
                  "showplotborder": "0",
                  "divlinecolor": "CCCCCC",
                  "canvasborderalpha": "0"
                },
                "data": [
                  {
                    "label": "July",
                    "value": "114000"
                  },
                  {
                    "label": "August",
                    "value": "86000"
                  },
                  {
                    "label": "September",
                    "value": "118000"
                  }
                ]
              }
            },
            {
              "id": "2013Q4",
              "linkedchart": {
                "chart": {
                  "caption": "Monthly Sales Summary",
                  "subcaption": "For the fourth quarter of year 2013",
                  "yaxisname": "Sales",
                  "showvalues": "0",
                  "bgcolor": "FFFFFF",
                  "numberprefix": "$",
                  "xaxisname": "Year",
                  "plotgradientcolor": "",
                  "showalternatehgridcolor": "0",
                  "showplotborder": "0",
                  "divlinecolor": "CCCCCC",
                  "canvasborderalpha": "0"
                },
                "data": [
                  {
                    "label": "October",
                    "value": "92000"
                  },
                  {
                    "label": "November",
                    "value": "102000"
                  },
                  {
                    "label": "December",
                    "value": "105000"
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  }
};

var chartconfig2 = {
  type: "Column2D",
  className: "fc-column2d",
  id: "mychart2",
  dataFormat: "JSON",
  dataSource: {
    "chart": {
      "caption": "Da Vinci Teams",
      "subcaption": "Click on a column to drill-down",
      "numberprefix": "",
      "showvalues": "0",
      "bgcolor": "FFFFFF",
      "xaxisname": "Month",
      "plotgradientcolor": "",
      "showalternatehgridcolor": "0",
      "showplotborder": "0",
      "divlinecolor": "CCCCCC",
      "canvasborderalpha": "0"
    },
    "data": [
        {
          "label": "P2O",
          "value": "1161000",
          "link": "newchart-xml-P2O",
          "color": "008ee4"
        },
        {
          "label": "O2B",
          "value": "1043000",
          "link": "newchart-xml-O2B",
          "color": "6baa01"
        },
        {
          "label": "UTC",
          "value": "1043000",
         // "link": "newchart-xml-2011Quarters",
          "color": "f8bd19"
        }
      ],
      "linkeddata": [
        {
          "id": "P2O",
          "linkedchart": {
            "chart": {
              "caption": "P2O Teams",
              "subcaption": "Click on a column to drill-down",
              "xaxisname": "Month",
              "yaxisname": "Lead Time",
              "numberprefix": "",
              "showvalues": "0",
              "bgcolor": "FFFFFF",
              "plotgradientcolor": "",
              "showalternatehgridcolor": "0",
              "showplotborder": "0",
              "divlinecolor": "CCCCCC",
              "canvasborderalpha": "0"
            },
            "data": [{
              "label": "group1",
              "value": "1161000",
              "color": "008ee4"
            },
            {
              "label": "group2",
              "value": "1161000",
              "color": "008ee4"
            }]
          }
        },
        {
          "id": "O2B",
          "linkedchart": {
            "chart": {
              "caption": "O2B Teams",
              "subcaption": "Click on a column to drill-down",
              "xaxisname": "Month",
              "yaxisname": "Lead Time",
              "numberprefix": "",
              "showvalues": "0",
              "bgcolor": "FFFFFF",
              "plotgradientcolor": "",
              "showalternatehgridcolor": "0",
              "showplotborder": "0",
              "divlinecolor": "CCCCCC",
              "canvasborderalpha": "0"
            },
            "data": [{
              "label": "group3",
              "value": "2161000",
              "color": "6baa01"
            },
            {
              "label": "group4",
              "value": "3161000",
              "color": "6baa01"
            }]
          }
        }
      ]  
    }  
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'DaVinci'
    };
  }

  render() {
    var _ = require('lodash');

    /*var arr = [
        {"name":"my2child1","title":"My 2 Child 1","parent":"my2"},
        {"name":"my2child2","title":"My 2 Child 2","parent":"my2"},
        {"name":"parent","title":"A single parent"},
        {"name":"child-parent","title":"A child parent","parent":"child1"},
        {"name":"my","title":"My"},
        {"name":"my2","title":"My2"},
        {"name":"child1","title":"Child 1","parent":"my"},
        {"name":"child2","title":"Child 2","parent":"my"}
    ];*/
    /*
    var davinciArray2 = [
      {"name": "davinci", "value": "1161000"},
      {"name": "P2O", "value": "1161000", "parent":"davinci"},
      {"name":"O2B","value":"1043000","parent":"davinci"},
      {"name":"UTC","value":"1043000","parent":"davinci"},
      {"name":"group1","value":"1161000","parent":"P2O"},
      {"name":"group2","value":"1161000","parent":"P2O"},
      {"name":"group3","value":"2161000","parent":"O2B"},
      {"name":"group4","value":"3161000","parent":"O2B"}
    ];

    function printdataArray(arr, name) {
      console.log("name is" + name);
      let list = _.filter(arr, item => item.parent === name)
                  .map(function(datas) { return {"label":datas.name ,"value": datas.value}});
      console.log(list);
      return(list);
    }*/

    // var result = transformToTree(arr);

    var davinciArray = [
      {"name": "davinci", "value": "1161000"},
      {"name": "P2O", "value": "1161000", "parent":"davinci"},
      {"name":"O2B","value":"1043000","parent":"davinci"},
      {"name":"UTC","value":"1043000","parent":"davinci"},
      {"name":"group1","value":"1161000","parent":"P2O"},
      {"name":"group2","value":"1161000","parent":"P2O"},
      {"name":"group3","value":"2161000","parent":"O2B"},
      {"name":"group4","value":"3161000","parent":"O2B"}
    ];

    function transformToTree(arr){
      var nodes = {};  
      return arr.filter(function(obj){
        var id = obj["name"], value= obj["value"],
            parentId = obj["parent"];

        nodes[id] = _.defaults(obj, nodes[id], { linkeddata: [] }, { data: [] });
        parentId && (nodes[parentId] = (nodes[parentId] || { linkeddata: [] }))["linkeddata"].push({"id": id, "linkedchart": obj});
        parentId && (nodes[parentId] = (nodes[parentId] || { data: [] }))["data"].push({"label":id ,"value": value});
        return !parentId;
    });    
  }


    var resultDaVinciTree = transformToTree(davinciArray);
  //[{"name":"davinci","value":"1161000","linkeddata":[{"obj":{"name":"P2O","value":"1161000","parent":"davinci","linkeddata":[{"obj":{"name":"group1","value":"1161000","parent":"P2O","linkeddata":[],"data":[]}},{"obj":{"name":"group2","value":"1161000","parent":"P2O","linkeddata":[],"data":[]}}],"data":[{"label":"group1","value":"1161000"},{"label":"group2","value":"1161000"}]}},{"obj":{"name":"O2B","value":"1043000","parent":"davinci","linkeddata":[{"obj":{"name":"group3","value":"2161000","parent":"O2B","linkeddata":[],"data":[]}},{"obj":{"name":"group4","value":"3161000","parent":"O2B","linkeddata":[],"data":[]}}],"data":[{"label":"group3","value":"2161000"},{"label":"group4","value":"3161000"}]}},{"obj":{"name":"UTC","value":"1043000","parent":"davinci","linkeddata":[],"data":[]}}],"data":[{"label":"P2O","value":"1161000"},{"label":"O2B","value":"1043000"},{"label":"UTC","value":"1043000"}]}]

    return (
      <div>

       <h1>FC REACT SAMPLE </h1>

        <ReactFC {...chartConfigs} />

        <Hello name={this.state.name} />
        <ReactFC {...chartconfig2} />

        <div style={{'position':'fixed', 'bottom':'0', 'display': 'block'}}>
        {JSON.stringify(resultDaVinciTree)}

        </div>
      </div>

    );
  }

}


render(<App />, document.getElementById('root'));
