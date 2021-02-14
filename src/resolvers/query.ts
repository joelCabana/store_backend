import { IResolvers } from "graphql-tools";

const resolversQuery: IResolvers = {
     Query:{
         users(root,args,context,info){
             console.log(root);
             console.log(args);
             console.log(context);
             console.log(info);
             return [
                 {
                    id:1,
                    name:'joel',
                    lastname:'cabana',
                    emial:'',
                    password:'',
                    registerdate:'',
                    birthday:''
                 }
             ]
         }
     }
}


export default resolversQuery;