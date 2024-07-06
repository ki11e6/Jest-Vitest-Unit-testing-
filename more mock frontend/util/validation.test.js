import {describe,it,expect} from 'vitest';
import { validateNotEmpty } from './validation';

describe('validation',() => {
    it('should throw an error if there is empty text is provide',() => {
        const errorMessage ='test error message';
        const text=''
        //inorder to test error the test fn should be wrapped in a function
        const validateFn=()=>validateNotEmpty(text,errorMessage)
        expect(validateFn).toThrow(errorMessage)
    })
    it('should throw an error if there is blank text is provide',() => {
        const errorMessage ='test error message';
        const text='      '
        //inorder to test error the test fn should be wrapped in a function
        const validateFn=()=>validateNotEmpty(text,errorMessage)
        expect(validateFn).toThrow(errorMessage)
    })
})