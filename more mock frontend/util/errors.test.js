import {describe,it,expect} from 'vitest';
import { HttpError, ValidationError } from './errors';

describe('class HttpError',()=>{
    it('should contain the provided status code,message and data',()=>{
        const testStatus=404;
        const testMessage='test';
        const testData={key:'test'}
        
        const newHttpError = new HttpError(testStatus, testMessage, testData);
        
        expect(newHttpError.statusCode).toBe(testStatus)
        expect(newHttpError.message).toBe(testMessage)
        expect(newHttpError.data).toBe(testData)
    })
    it('should contain undefined as data if no data is provide',()=>{
        const testStatus=404;
        const testMessage='test';
        
        const newHttpError = new HttpError(testStatus, testMessage);
        
        expect(newHttpError.statusCode).toBe(testStatus)
        expect(newHttpError.message).toBe(testMessage)
        expect(newHttpError.data).toBeUndefined()
    })
})

describe('class validatation',()=>{
    it('should contain the provided error message',()=>{
        const errorMessage='test message'
        const newValidationError = new ValidationError(errorMessage)
        expect(newValidationError.message).toBe(errorMessage)
    })
})