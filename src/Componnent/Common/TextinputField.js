import React from 'react';
import classNames from 'classnames';

function TextinputField() {

    const {
        type,
        id,
        name,
        placeholder,
        value,
        onChange,
        lblText,
        infoText,
        className,
        error

    } = props





    return (
        <div className="mb-3">
        {lblText && (<lable htmlFor={id} className="form-lable">{lblText}</lable>)}
        <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={classNames(className,{
            "is-invalid": error
        })}
        />
        {infoText && (<div id={id} className='form-text'><i class="fas fa-info-circle"></i>{infoText}</div>)}
        {error && (
            <div className='invalid-feedback'>
               <i class="fas fa-exclamation"></i> {error}

            </div>
        )}
        </div>
    
    )
}

export default TextinputField
