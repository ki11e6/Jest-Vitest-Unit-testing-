import {describe,it,expect,vi, beforeEach} from 'vitest';
import fs from 'fs';
import path from 'path';
import { showError } from './dom';
import {Window} from 'happy-dom';

//here we are creating virtual browsers environment using happy-dom.

const htmlDocPath=path.join(process.cwd(),'index.html');
const htmlDocumentContent=fs.readFileSync(htmlDocPath).toString();

const window=new Window();
const document=window.document;

vi.stubGlobal('document',document);

beforeEach(()=>{
    document.body.innerHTML=''
    document.write(htmlDocumentContent);
})

it('should add an error paragram to the id of the errors',() => {
    showError('test')
    const errorsEl=document.getElementById('errors');
    const errorPara=errorsEl.firstElementChild;
    expect(errorPara).not.toBeNull();
})

it('should not contain an error paragraph initially',()=>{
    const errorsEl=document.getElementById('errors');
    const errorPara=errorsEl.firstElementChild;
    expect(errorPara).toBeNull();
})

it('should output the provided error message in the error paragraph',()=>{
    const testErrorMessage='test error message'
    showError(testErrorMessage)
    const errorsEl=document.getElementById('errors');
    const errorPara=errorsEl.firstElementChild;
    expect(errorPara.textContent).toBe(testErrorMessage);
})