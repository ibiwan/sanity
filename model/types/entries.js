import entryType from "./entry";
import Typist from "../../lib/typist";

export default {
    type: Typist.ARRAY
    elements:{
        type: entryType
    }
    customValidation:(entries)=>{return true;}
}