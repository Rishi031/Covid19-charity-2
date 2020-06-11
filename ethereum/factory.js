import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x0e4a3cC987CcA08668028f6ebba33fEF313b51C4'
  
);

export default instance;
