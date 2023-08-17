
import {Schema , model , models} from 'mongoos';

const customerSchema = new Schema({
    name : {
        type : String ,
        required : true ,
        minLength : 3 ,
    },
    lastName :{
        type : String ,
        required : true ,
        minLength : 3 ,
    },
    email : {
        type : String ,
        required : true ,
        minLength : 3 ,
    },
    phone : String ,
    address : String,
    postalCod : Number ,
    date : Date ,
    product :{
        type :Array ,
        default :[]
    },
    createAt :{
        type : Date,
        default :()=> Date.now,
        immutable : true
    },
    updateAt :{
        type : date,
        default : ()=> Date.now
    },
});

const Customer = models.Customer || model("Customer" , customerSchema);

export default Customer;