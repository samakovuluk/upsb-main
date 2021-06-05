# Microfrontend Application for Hackaton DEV-HACK
This is the main core layer for our microfrontend application. Project consist of three microfrontends: Wallet, Credit, Deposit. And all application is build by the library react. 

This architecture helps efficiently deploy, develop, and scale individual parts of the application backend. A microfrontend is that the team can independently develop, test, and deploy as a whole. All the microservices are hosting separately and they doesn't have any depencies each other. And core layer application is composes and combine all microfrontends by the rendering their main.js script with lazy load way.


| Package                                                  | Description                                        | Demo | Status                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------- | ----------------------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [:bank: UPSB Main](https://github.com/samakovuluk/upsb-main)           | Main Core layer react application | [upsb.xyz](upsb.xyz) | ![CI/CD](https://github.com/samakovuluk/upsb-main/workflows/CI/CD/badge.svg)      [![codecov](https://codecov.io/gh/samakovuluk/upsb-main/branch/master/graph/badge.svg)](https://codecov.io/gh/samakovuluk/upsb-main)      ![GitHub branch checks state](https://img.shields.io/github/checks-status/samakovuluk/upsb-main/master)                                            |
| [:dollar: UPSB Wallet](https://github.com/samakovuluk/upsb-wallet)             | Microfontend UPSB Wallet | [wallet.upsb.xyz](wallet.upsb.xyz) | ![CI/CD](https://github.com/samakovuluk/upsb-main/workflows/CI/CD/badge.svg)      [![codecov](https://codecov.io/gh/samakovuluk/upsb-main/branch/master/graph/badge.svg)](https://codecov.io/gh/samakovuluk/upsb-main)      ![GitHub branch checks state](https://img.shields.io/github/checks-status/samakovuluk/upsb-main/master)                                                    |
| [:credit_card: UPSB Credit](https://github.com/samakovuluk/upsb-credit)         | Microfrontend UPSB Credit | [credit.upsb.xyz](credit.upsb.xyz) | ![CI/CD](https://github.com/samakovuluk/upsb-main/workflows/CI/CD/badge.svg)      [![codecov](https://codecov.io/gh/samakovuluk/upsb-main/branch/master/graph/badge.svg)](https://codecov.io/gh/samakovuluk/upsb-main)      ![GitHub branch checks state](https://img.shields.io/github/checks-status/samakovuluk/upsb-main/master)                                        |
| [:moneybag: UPSB Deposit](https://github.com/samakovuluk/upsb-deposit)     | Microfrontend UPSB Deposit | [deposit.upsb.xyz](deposit.upsb.xyz) | ![CI/CD](https://github.com/samakovuluk/upsb-main/workflows/CI/CD/badge.svg)      [![codecov](https://codecov.io/gh/samakovuluk/upsb-main/branch/master/graph/badge.svg)](https://codecov.io/gh/samakovuluk/upsb-main)     ![GitHub branch checks state](https://img.shields.io/github/checks-status/samakovuluk/upsb-main/master)                                 |



## How to start project localy

In the project directory, you can run:

### `yarn start`

## About the architecture of Microfronend Application

Core layer application is know all adresses of microfronts. In the main application in .env file we are giving there name and host of microfronts.
And by the navigation it will rendering by retrieving main.js script from microfront and shows to the front part. 
Also, all applications are doesn't have any dependencies each other which will not crash all application. And any team which is working in microfront can run project in own host and develop itself, without the run core layer and other microfronts. And it increases the productivity and efficiency of the project.

![](Blank%20Diagram.png??raw=true)


The excellence of this architecture, it can be used by a native application which is written in Kotlin. Everything is same with above written, and just the Kotlin application will be a main layer which will combine microfronts. And here the microfronts will render via webview. You may think that this will take a long time to load and it will the bad way. In theory, no, if you will configure caching correctly, the application will work fastly, and without any loads. And it will be impossible to notice that there has webview.

[](Blank%20Diagram%20with%20Kotlin.png??raw=true)

## Сollaborators
The project UPSB is created by these developers.
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/samakovuluk"><img src="https://avatars.githubusercontent.com/u/35860953?v=4" width="100px" alt=""/><br><sub><b>Samakov Ulukbek</b></sub></a></td>
    <td align="center"><a href="https://github.com/akimberl"><img src="https://avatars.githubusercontent.com/u/67225394?v=4" width="100px" alt=""/><br><sub><b>Burbu </b></sub></a></td>
    <td align="center"><a href="https://github.com/arishonochek"><img src="https://avatars.githubusercontent.com/u/85416431?v=4" width="100px" alt=""/><br><sub><b>Arina </b></sub></a></td>
  </tr>
  
</table>


