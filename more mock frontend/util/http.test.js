import {describe,it,expect,vi} from 'vitest';
import { sendDataRequest } from './http';
import {HttpError} from './errors.js';



//spie function for faking fetch function.
const testResponseData={testKey:'testData'}
const testFetch= vi.fn((url,options)=>{
    return new Promise((resolve,reject)=>{
        if(typeof options?.body!=='string'){
            return reject('Not a string')
        }
        const testResponse={
            ok:true,
            json(){
                return new Promise((resolve,reject)=>{
                    resolve(testResponseData)
                });
            }
        }
        resolve(testResponse)
    })
})

//we cant mock fetch using vi.mock as its globalally available not imported module.
//we can use vi.stubGlobal() for this.
vi.stubGlobal('fetch',testFetch)

describe('httpError - sendDataRequest',()=>{
    it('should return any variable response data',()=>{
        const testData={key:'test'}
        return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
    })

//tying to catch reject from promise

    it('should convert the provided data to JSON before sending the request',async()=>{
    const testData={key:'test'}
        let errorMessage;
        try{
            await sendDataRequest(testData)
        }catch(error){
            errorMessage = error;
        }
        expect(errorMessage).not.toBe('Not a string')

    })

    it('should throw an HttpError if the response.ok is not ok',()=>{

        //selective mock
        testFetch.mockImplementationOnce((url,options)=>{
            return new Promise((resolve,reject)=>{

                const testResponse={
                    ok:false,
                    json(){
                        return new Promise((resolve,reject)=>{
                            resolve(testResponseData)
                        });
                    }
                }
                resolve(testResponse)
            })
        })

        const testData={key:'test'}
        return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError)

    })
})