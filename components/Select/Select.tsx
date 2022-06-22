import React, {useState} from 'react';
import ReactSelect, {StylesConfig} from "react-select";
import classNames from "classnames";
import styles from './select.module.scss'

interface DropdownIndicatorProps {
    isOpen: boolean;
    isFocused: boolean;
}

const DropdownIndicator: React.FC<DropdownIndicatorProps> = ({
                                                                 isOpen,
                                                                 isFocused,
                                                             }) => {
    return (
        <button
            type="button"
            className={classNames(styles.arrow, {
                [styles.focus]: isFocused && isOpen,
            })}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6">
                <path id="Triangle" d="M5,0l5-6H0Z" transform="translate(0 6)" fill="#ef6d58"/>
            </svg>
        </button>
    );
};

const selectStyles: StylesConfig = {
    control: () => ({
        display: "flex",
        borderRadius: '6px',
        border: '1px solid #F3D1BF',
        backgroundColor: "#ffffff",
        cursor: "pointer",
    }),
    valueContainer: (base) => ({
        ...base,
        padding: "18px 16px",
        lineHeight: '1',
    }),
    singleValue: (base) => ({
        ...base,
        color: 'rgba(57,20,0,0.64)',
    }),
    indicatorSeparator: () => ({}),
    menu: (base) => ({
        ...base,
        borderRadius: '6px',
        border: '1px solid #F3D1BF',
        backgroundColor: "#ffffff",
        boxShadow: "none",
    }),
    menuList: (base) => ({
        ...base,
    }),
    option: () => ({
        borderBottom: "1px solid #F3D1BF",
        padding: "18px 16px",
        color: 'rgba(57,20,0,0.64)',
        lineHeight: '1',
        cursor: "pointer",
    }),
};

interface TOption {
    value: string;
    label: string;
}

interface ISelectProps {
    id: string,
    instanceId: string,
    options: TOption[],
    activeOption: TOption,
    onChange: (option: TOption) => void,
    defaultValue: TOption
}

const Select = ({options, id, instanceId, activeOption, onChange, defaultValue}: ISelectProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const config = {
        isSearchable: false,
        hideSelectedOptions: true,
        styles: selectStyles,
        id,
        instanceId,
        defaultValue,
        onMenuOpen: () => setIsOpen(true),
        onMenuClose: () => setIsOpen(false),
        value: activeOption,
        options,
        onChange,
    };
    return (
        <ReactSelect
            {...config}
            components={{
                DropdownIndicator: ({isFocused}) => (
                    <DropdownIndicator isFocused={isFocused} isOpen={isOpen}/>
                ),
            }}
        />
    );
};

export default Select;