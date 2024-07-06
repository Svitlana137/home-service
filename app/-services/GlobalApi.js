import {gql, request} from 'graphql-request';

const MASTER_URL='https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clxrn5o8703og06uxzh3fg057/master'

const getCategory=async()=>{
    const query=gql`
    query Category {
        categories {
          bgcolor {
            hex
          }
          id
          name
          icon {
            url
          }
        }
      }      
      `
    
    const result=await  request(MASTER_URL,query)
    return result
}
const getAllBusinessList=async()=>{
   const query=gql`
   query BusinessList {
    bussinessLists {
      about
      address
      category {
        name
      }
      contactPerson
      email
      images {
        url
      }
      id
      name
    }
  }  
  `
  const result=await  request(MASTER_URL,query)
  return result;

}


export default{
   getCategory ,
   getAllBusinessList
}