import {describe,it,expect,vi} from 'vitest'
import { generateReportData } from './data'

describe('generateReportData()',()=>{


    //in this we are trying to find if the function logFn is 
    //called or not using Spie method
    //here generateReportData act as spie 
    //which will track the logFn
    
    it('should execute logFn if provided',()=>{
        const logger=vi.fn() 
        logger.mockImplementationOnce(()=>{})
        //const logger =jest.fn() for jest 
        generateReportData(logger); // this is a Spie
        expect(logger).toBeCalled();
    })
})