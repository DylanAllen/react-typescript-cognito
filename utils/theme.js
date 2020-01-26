export const theme = {
  "name": "react-typescript-cognito",
  "rounding": 4,
  "spacing": 20,
  "global": {
    "colors": {
      "brand": "#AB1C1B",
      "accent-1": "#FF7C0F",
      "accent-2": "#F5F5F5",
      "accent-3": "#cc5e04",
      "neutral-1": "#9bd7d1",
      "neutral-2": "#cc5e04",
      "focus": "#DADADA",
      "accent-4": "#305C7A"
    },
    "font": {
      "family": "\"Montserrat\"",
      "size": "15px",
      "height": "20px",
      "maxWidth": "300px",
      "face": "/* cyrillic-ext */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format('woff2');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format('woff2');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 400;\n  src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\n/* cyrillic-ext */\n@font-face {\n  font-family: 'Comfortaa';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/comfortaa/v27/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDr4fJh1Zyc61YBlG.woff) format('woff');\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: 'Comfortaa';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/comfortaa/v27/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDrcfJh1Zyc61YBlG.woff) format('woff');\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek */\n@font-face {\n  font-family: 'Comfortaa';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/comfortaa/v27/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDrAfJh1Zyc61YBlG.woff) format('woff');\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Comfortaa';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/comfortaa/v27/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDrwfJh1Zyc61YBlG.woff) format('woff');\n  unicode-range: U+0102-0103, U+0110-0111, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Comfortaa';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/comfortaa/v27/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDr0fJh1Zyc61YBlG.woff) format('woff');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Comfortaa';\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/comfortaa/v27/1Pt_g8LJRfWJmhDAuUsSQamb1W0lwk4S4WjMDrMfJh1Zyc61YA.woff) format('woff');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n"
    },
    "control": {
      "border": {
        "radius": "4px"
      }
    },
    "borderSize": {
      "xsmall": "1px",
      "small": "2px",
      "medium": "3.3333333333333335px",
      "large": "10px",
      "xlarge": "20px"
    },
    "breakpoints": {
      "small": {
        "value": 640,
        "borderSize": {
          "xsmall": "1px",
          "small": "2px",
          "medium": "3.3333333333333335px",
          "large": "5px",
          "xlarge": "10px"
        },
        "edgeSize": {
          "none": "0px",
          "hair": "1px",
          "xxsmall": "2px",
          "xsmall": "2.5px",
          "small": "5px",
          "medium": "10px",
          "large": "20px",
          "xlarge": "40px"
        },
        "size": {
          "xxsmall": "20px",
          "xsmall": "40px",
          "small": "80px",
          "medium": "160px",
          "large": "320px",
          "xlarge": "640px",
          "full": "100%"
        }
      },
      "medium": {
        "value": 1280
      },
      "large": {}
    },
    "edgeSize": {
      "none": "0px",
      "hair": "1px",
      "xxsmall": "2.5px",
      "xsmall": "5px",
      "small": "10px",
      "medium": "20px",
      "large": "40px",
      "xlarge": "80px",
      "responsiveBreakpoint": "small"
    },
    "input": {
      "padding": "10px",
      "weight": 600
    },
    "spacing": "20px",
    "size": {
      "xxsmall": "40px",
      "xsmall": "80px",
      "small": "160px",
      "medium": "320px",
      "large": "640px",
      "xlarge": "960px",
      "xxlarge": "1280px",
      "full": "100%"
    }
  },
  "button": {
    "border": {
      "width": "2px",
      "radius": "15px"
    },
    "padding": {
      "vertical": "3px",
      "horizontal": "18px"
    }
  },
  "checkBox": {
    "check": {
      "radius": "4px"
    },
    "toggle": {
      "radius": "20px",
      "size": "40px"
    },
    "size": "20px"
  },
  "radioButton": {
    "size": "20px"
  },
  "calendar": {
    "small": {
      "fontSize": "11.666666666666666px",
      "lineHeight": 1.375,
      "daySize": "22.857142857142858px"
    },
    "medium": {
      "fontSize": "15px",
      "lineHeight": 1.45,
      "daySize": "45.714285714285715px"
    },
    "large": {
      "fontSize": "25px",
      "lineHeight": 1.11,
      "daySize": "91.42857142857143px"
    }
  },
  "clock": {
    "analog": {
      "hour": {
        "width": "6.666666666666667px",
        "size": "20px"
      },
      "minute": {
        "width": "3.3333333333333335px",
        "size": "10px"
      },
      "second": {
        "width": "2.5px",
        "size": "8px"
      },
      "size": {
        "small": "60px",
        "medium": "80px",
        "large": "120px",
        "xlarge": "180px",
        "huge": "240px"
      }
    },
    "digital": {
      "text": {
        "xsmall": {
          "size": "8.333333333333332px",
          "height": 1.5
        },
        "small": {
          "size": "11.666666666666666px",
          "height": 1.43
        },
        "medium": {
          "size": "15px",
          "height": 1.375
        },
        "large": {
          "size": "18.333333333333332px",
          "height": 1.167
        },
        "xlarge": {
          "size": "21.666666666666668px",
          "height": 1.1875
        },
        "xxlarge": {
          "size": "28.333333333333336px",
          "height": 1.125
        }
      }
    }
  },
  "heading": {
    "level": {
      "1": {
        "small": {
          "size": "28.333333333333336px",
          "height": "33.333333333333336px",
          "maxWidth": "100%"
        },
        "medium": {
          "size": "41.66666666666667px",
          "height": "46.66666666666667px",
          "maxWidth": "100%"
        },
        "large": {
          "size": "68.33333333333334px",
          "height": "73.33333333333334px",
          "maxWidth": "100%"
        },
        "xlarge": {
          "size": "95px",
          "height": "100px",
          "maxWidth": "100%"
        }
      },
      "2": {
        "small": {
          "size": "21.666666666666668px",
          "height": "26.666666666666668px",
          "maxWidth": "100%"
        },
        "medium": {
          "size": "28.333333333333336px",
          "height": "33.333333333333336px",
          "maxWidth": "100%"
        },
        "large": {
          "size": "41.66666666666667px",
          "height": "46.66666666666667px",
          "maxWidth": "100%"
        },
        "xlarge": {
          "size": "55px",
          "height": "60px",
          "maxWidth": "100%"
        }
      },
      "3": {
        "small": {
          "size": "18.333333333333332px",
          "height": "23.333333333333332px",
          "maxWidth": "100%"
        },
        "medium": {
          "size": "21.666666666666668px",
          "height": "26.666666666666668px",
          "maxWidth": "100%"
        },
        "large": {
          "size": "28.333333333333336px",
          "height": "33.333333333333336px",
          "maxWidth": "100%"
        },
        "xlarge": {
          "size": "35px",
          "height": "40px",
          "maxWidth": "100%"
        }
      },
      "4": {
        "small": {
          "size": "15px",
          "height": "20px",
          "maxWidth": "500px"
        },
        "medium": {
          "size": "15px",
          "height": "20px",
          "maxWidth": "600px"
        },
        "large": {
          "size": "15px",
          "height": "20px",
          "maxWidth": "700px"
        },
        "xlarge": {
          "size": "15px",
          "height": "20px",
          "maxWidth": "800px"
        }
      },
      "5": {
        "small": {
          "size": "13.333333333333334px",
          "height": "18.333333333333332px",
          "maxWidth": "266.6666666666667px"
        },
        "medium": {
          "size": "13.333333333333334px",
          "height": "18.333333333333332px",
          "maxWidth": "266.6666666666667px"
        },
        "large": {
          "size": "13.333333333333334px",
          "height": "18.333333333333332px",
          "maxWidth": "266.6666666666667px"
        },
        "xlarge": {
          "size": "13.333333333333334px",
          "height": "18.333333333333332px",
          "maxWidth": "266.6666666666667px"
        }
      },
      "6": {
        "small": {
          "size": "11.666666666666666px",
          "height": "16.666666666666668px",
          "maxWidth": "233.33333333333331px"
        },
        "medium": {
          "size": "11.666666666666666px",
          "height": "16.666666666666668px",
          "maxWidth": "233.33333333333331px"
        },
        "large": {
          "size": "11.666666666666666px",
          "height": "16.666666666666668px",
          "maxWidth": "233.33333333333331px"
        },
        "xlarge": {
          "size": "11.666666666666666px",
          "height": "16.666666666666668px",
          "maxWidth": "233.33333333333331px"
        }
      }
    },
    "font": {
      "family": "\"Comfortaa\""
    }
  },
  "paragraph": {
    "small": {
      "size": "11.666666666666666px",
      "height": "16.666666666666668px",
      "maxWidth": "233.33333333333331px"
    },
    "medium": {
      "size": "15px",
      "height": "20px",
      "maxWidth": "300px"
    },
    "large": {
      "size": "18.333333333333332px",
      "height": "23.333333333333332px",
      "maxWidth": "366.66666666666663px"
    },
    "xlarge": {
      "size": "21.666666666666668px",
      "height": "26.666666666666668px",
      "maxWidth": "433.33333333333337px"
    },
    "xxlarge": {
      "size": "28.333333333333336px",
      "height": "33.333333333333336px",
      "maxWidth": "566.6666666666667px"
    }
  },
  "text": {
    "xsmall": {
      "size": "10px",
      "height": "15px",
      "maxWidth": "200px"
    },
    "small": {
      "size": "11.666666666666666px",
      "height": "16.666666666666668px",
      "maxWidth": "233.33333333333331px"
    },
    "medium": {
      "size": "15px",
      "height": "20px",
      "maxWidth": "300px"
    },
    "large": {
      "size": "18.333333333333332px",
      "height": "23.333333333333332px",
      "maxWidth": "366.66666666666663px"
    },
    "xlarge": {
      "size": "21.666666666666668px",
      "height": "26.666666666666668px",
      "maxWidth": "433.33333333333337px"
    },
    "xxlarge": {
      "size": "28.333333333333336px",
      "height": "33.333333333333336px",
      "maxWidth": "566.6666666666667px"
    }
  }
}
