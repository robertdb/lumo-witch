import Lottie from "lottie-react";

import {  useAppSelector }from "../../state-managment/hooks"; 
import { selectAttacks} from "../../state-managment/slices/damage";
import { TextAnimate } from "./styles";
import { getTotalDamage } from "../PotionForm/utils/damage";
import potions from "./potion.json";


const WitchDamage = () => {
  const attacks = useAppSelector(selectAttacks);

 return (
  <div>
    {attacks?.map((attack, index) => 
    <TextAnimate key={`${attack}-${index}`}>
      {`Attack ${index + 1}: ${attack}%`}
    </TextAnimate>)}
    {attacks.length > 0 && 
      <TextAnimate key={getTotalDamage(attacks)}>{`Total Damage: ${getTotalDamage(attacks)}%`} </TextAnimate>
    }
    <Lottie animationData={potions} autoplay={attacks.length > 0} loop={attacks.length > 0} style={{ width: 200}} />
  </div>
 )

}

export { WitchDamage };
