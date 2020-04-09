Covid19-charity
This app was built for the hackCovid19 and managed to win the 2nd place.

Motivation:-

This app is a blockchain based charity app which also shows the coronavirus statistics, precautions and symptoms.

Due to the rise of Coronavirus, there are a huge number of growing fake charities which emerged and which are looting people during these tough times. To address this issue, I have made a blockchain based transparent charity app to ensure people do not get cheated as there is transparency in each and every step.

Workflow:

There are two components to this app:-
One is the real time coronavirus statistics which I have visualized using data from John Hopkins API. This app mainly shows the trend and graphs related to statistics of cases in the majorly affected countries in the world.

I have hosted my app here:-

 https://hackcovid19-nits.netlify.com/

 I have also hosted a web app on Eris using ARCgis which shows the symptoms and precautions which one has to take to stay safe. I have hosted it in their domain and this requires you to login into Eris to view it:-

 https://hackcovid19-nit-rishi135.hub.arcgis.com/

 I have integrated these components into the main app which is built on Ethereum and matic.

Dapp:-



To run the dapp on localhost, please make sure you have metamask extension installed; follow these steps:

1) clone or download zip
2) cd into project directory
3) Replace the metamask private key in deploy.js with your metamask wallet key. Make sure you are in rinkeby test network and have enough ether in your wallets.
4) run "npm install"
5) run "npm start"

About the app(Also shown in the video):-

The first Dashboard page shows the list of open charities which a user can contribute to. He can view the charity and get more information about it.
An organization can register itself on the network by giving more details about itself and by setting a minimum contribution which they would want from each person. The person who contributes automatically becomes approver.
The organization can then make requests to spend the money for the purpose of welfare or other government purposes.
All the approvers in the network who have contributed to the charity, can see the request and a majority vote is required from all the approvers to be able to execute the transaction.
This way there is transparency instilled into the system and this ensures that people contribute their money only to legit and real charities.


