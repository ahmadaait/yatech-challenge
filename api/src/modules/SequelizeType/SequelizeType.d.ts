import { DataTypes, ModelAttributeColumnOptions } from 'sequelize';
declare type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
declare type Props = WithOptional<ModelAttributeColumnOptions, 'type'>;
declare class SequelizeType {
    static primaryKeyInteger(disallowNull?: boolean, props?: Props): {
        values?: string[];
        set?: (this: import("sequelize/types").Model<any, any>, val: unknown) => void;
        unique?: string | boolean | {
            name: string;
            msg: string;
        };
        get?: (this: import("sequelize/types").Model<any, any>) => unknown;
        validate?: import("sequelize/types").ModelValidateOptions;
        primaryKey: boolean;
        autoIncrement: boolean;
        autoIncrementIdentity?: boolean;
        comment?: string;
        references?: string | import("sequelize/types").ModelAttributeColumnReferencesOptions;
        onUpdate?: string;
        onDelete?: string;
        allowNull: boolean;
        field?: string;
        defaultValue?: unknown;
        type: string | DataTypes.AbstractDataTypeConstructor | DataTypes.AbstractDataType | DataTypes.IntegerDataTypeConstructor;
    };
    static foreignKeyUUID(disallowNull?: boolean, props?: Props): {
        values?: string[];
        set?: (this: import("sequelize/types").Model<any, any>, val: unknown) => void;
        unique?: string | boolean | {
            name: string;
            msg: string;
        };
        get?: (this: import("sequelize/types").Model<any, any>) => unknown;
        validate?: import("sequelize/types").ModelValidateOptions;
        primaryKey?: boolean;
        autoIncrement?: boolean;
        autoIncrementIdentity?: boolean;
        comment?: string;
        references?: string | import("sequelize/types").ModelAttributeColumnReferencesOptions;
        onUpdate?: string;
        onDelete?: string;
        allowNull: boolean;
        field?: string;
        defaultValue?: unknown;
        type: DataTypes.DataType;
    };
    static integer(disallowNull?: boolean, props?: Props): {
        values?: string[];
        set?: (this: import("sequelize/types").Model<any, any>, val: unknown) => void;
        unique?: string | boolean | {
            name: string;
            msg: string;
        };
        get?: (this: import("sequelize/types").Model<any, any>) => unknown;
        validate?: import("sequelize/types").ModelValidateOptions;
        primaryKey?: boolean;
        autoIncrement?: boolean;
        autoIncrementIdentity?: boolean;
        comment?: string;
        references?: string | import("sequelize/types").ModelAttributeColumnReferencesOptions;
        onUpdate?: string;
        onDelete?: string;
        allowNull: boolean;
        field?: string;
        defaultValue?: unknown;
        type: string | DataTypes.AbstractDataTypeConstructor | DataTypes.AbstractDataType | DataTypes.IntegerDataTypeConstructor;
    };
    static float(disallowNull?: boolean, props?: Props): {
        values?: string[];
        set?: (this: import("sequelize/types").Model<any, any>, val: unknown) => void;
        unique?: string | boolean | {
            name: string;
            msg: string;
        };
        get?: (this: import("sequelize/types").Model<any, any>) => unknown;
        validate?: import("sequelize/types").ModelValidateOptions;
        primaryKey?: boolean;
        autoIncrement?: boolean;
        autoIncrementIdentity?: boolean;
        comment?: string;
        references?: string | import("sequelize/types").ModelAttributeColumnReferencesOptions;
        onUpdate?: string;
        onDelete?: string;
        allowNull: boolean;
        field?: string;
        defaultValue?: unknown;
        type: string | DataTypes.AbstractDataTypeConstructor | DataTypes.AbstractDataType | DataTypes.FloatDataTypeConstructor;
    };
    static decimal(disallowNull?: boolean, props?: Props): {
        values?: string[];
        set?: (this: import("sequelize/types").Model<any, any>, val: unknown) => void;
        unique?: string | boolean | {
            name: string;
            msg: string;
        };
        get?: (this: import("sequelize/types").Model<any, any>) => unknown;
        validate?: import("sequelize/types").ModelValidateOptions;
        primaryKey?: boolean;
        autoIncrement?: boolean;
        autoIncrementIdentity?: boolean;
        comment?: string;
        references?: string | import("sequelize/types").ModelAttributeColumnReferencesOptions;
        onUpdate?: string;
        onDelete?: string;
        allowNull: boolean;
        field?: string;
        defaultValue?: unknown;
        type: string | DataTypes.AbstractDataTypeConstructor | DataTypes.AbstractDataType | DataTypes.DecimalDataType;
    };
    static boolean(disallowNull?: boolean, props?: Props): {
        values?: string[];
        set?: (this: import("sequelize/types").Model<any, any>, val: unknown) => void;
        unique?: string | boolean | {
            name: string;
            msg: string;
        };
        get?: (this: import("sequelize/types").Model<any, any>) => unknown;
        validate?: import("sequelize/types").ModelValidateOptions;
        primaryKey?: boolean;
        autoIncrement?: boolean;
        autoIncrementIdentity?: boolean;
        comment?: string;
        references?: string | import("sequelize/types").ModelAttributeColumnReferencesOptions;
        onUpdate?: string;
        onDelete?: string;
        allowNull: boolean;
        field?: string;
        defaultValue?: unknown;
        type: DataTypes.DataType;
    };
    static text(disallowNull?: boolean, props?: Props): {
        values?: string[];
        set?: (this: import("sequelize/types").Model<any, any>, val: unknown) => void;
        unique?: string | boolean | {
            name: string;
            msg: string;
        };
        get?: (this: import("sequelize/types").Model<any, any>) => unknown;
        validate?: import("sequelize/types").ModelValidateOptions;
        primaryKey?: boolean;
        autoIncrement?: boolean;
        autoIncrementIdentity?: boolean;
        comment?: string;
        references?: string | import("sequelize/types").ModelAttributeColumnReferencesOptions;
        onUpdate?: string;
        onDelete?: string;
        allowNull: boolean;
        field?: string;
        defaultValue?: unknown;
        type: string | DataTypes.AbstractDataTypeConstructor | DataTypes.AbstractDataType | DataTypes.TextDataTypeConstructor;
    };
    static string(disallowNull?: boolean, props?: Props): {
        values?: string[];
        set?: (this: import("sequelize/types").Model<any, any>, val: unknown) => void;
        unique?: string | boolean | {
            name: string;
            msg: string;
        };
        get?: (this: import("sequelize/types").Model<any, any>) => unknown;
        validate?: import("sequelize/types").ModelValidateOptions;
        primaryKey?: boolean;
        autoIncrement?: boolean;
        autoIncrementIdentity?: boolean;
        comment?: string;
        references?: string | import("sequelize/types").ModelAttributeColumnReferencesOptions;
        onUpdate?: string;
        onDelete?: string;
        allowNull: boolean;
        field?: string;
        defaultValue?: unknown;
        type: string | DataTypes.AbstractDataTypeConstructor | DataTypes.AbstractDataType | DataTypes.StringDataTypeConstructor;
    };
    static json(disallowNull?: boolean, props?: Props): {
        values?: string[];
        set?: (this: import("sequelize/types").Model<any, any>, val: unknown) => void;
        unique?: string | boolean | {
            name: string;
            msg: string;
        };
        get?: (this: import("sequelize/types").Model<any, any>) => unknown;
        validate?: import("sequelize/types").ModelValidateOptions;
        primaryKey?: boolean;
        autoIncrement?: boolean;
        autoIncrementIdentity?: boolean;
        comment?: string;
        references?: string | import("sequelize/types").ModelAttributeColumnReferencesOptions;
        onUpdate?: string;
        onDelete?: string;
        allowNull: boolean;
        field?: string;
        defaultValue?: unknown;
        type: DataTypes.DataType;
    };
    static phoneNumber(disallowNull?: boolean, props?: Props): {
        values?: string[];
        set?: (this: import("sequelize/types").Model<any, any>, val: unknown) => void;
        unique?: string | boolean | {
            name: string;
            msg: string;
        };
        get?: (this: import("sequelize/types").Model<any, any>) => unknown;
        validate?: import("sequelize/types").ModelValidateOptions;
        primaryKey?: boolean;
        autoIncrement?: boolean;
        autoIncrementIdentity?: boolean;
        comment?: string;
        references?: string | import("sequelize/types").ModelAttributeColumnReferencesOptions;
        onUpdate?: string;
        onDelete?: string;
        allowNull: boolean;
        field?: string;
        defaultValue?: unknown;
        type: string | DataTypes.AbstractDataTypeConstructor | DataTypes.AbstractDataType | DataTypes.StringDataTypeConstructor;
    };
    static email(disallowNull?: boolean, props?: Props): {
        values?: string[];
        set?: (this: import("sequelize/types").Model<any, any>, val: unknown) => void;
        unique?: string | boolean | {
            name: string;
            msg: string;
        };
        get?: (this: import("sequelize/types").Model<any, any>) => unknown;
        validate?: import("sequelize/types").ModelValidateOptions;
        primaryKey?: boolean;
        autoIncrement?: boolean;
        autoIncrementIdentity?: boolean;
        comment?: string;
        references?: string | import("sequelize/types").ModelAttributeColumnReferencesOptions;
        onUpdate?: string;
        onDelete?: string;
        allowNull: boolean;
        field?: string;
        defaultValue?: unknown;
        type: string | DataTypes.AbstractDataTypeConstructor | DataTypes.AbstractDataType | DataTypes.StringDataTypeConstructor;
    };
    static date(disallowNull?: boolean, props?: Props): {
        values?: string[];
        set?: (this: import("sequelize/types").Model<any, any>, val: unknown) => void;
        unique?: string | boolean | {
            name: string;
            msg: string;
        };
        get?: (this: import("sequelize/types").Model<any, any>) => unknown;
        validate?: import("sequelize/types").ModelValidateOptions;
        primaryKey?: boolean;
        autoIncrement?: boolean;
        autoIncrementIdentity?: boolean;
        comment?: string;
        references?: string | import("sequelize/types").ModelAttributeColumnReferencesOptions;
        onUpdate?: string;
        onDelete?: string;
        allowNull: boolean;
        field?: string;
        defaultValue?: unknown;
        type: string | DataTypes.AbstractDataTypeConstructor | DataTypes.AbstractDataType | DataTypes.DateDataTypeConstructor;
    };
    static time(disallowNull?: boolean, props?: Props): {
        values?: string[];
        set?: (this: import("sequelize/types").Model<any, any>, val: unknown) => void;
        unique?: string | boolean | {
            name: string;
            msg: string;
        };
        get?: (this: import("sequelize/types").Model<any, any>) => unknown;
        validate?: import("sequelize/types").ModelValidateOptions;
        primaryKey?: boolean;
        autoIncrement?: boolean;
        autoIncrementIdentity?: boolean;
        comment?: string;
        references?: string | import("sequelize/types").ModelAttributeColumnReferencesOptions;
        onUpdate?: string;
        onDelete?: string;
        allowNull: boolean;
        field?: string;
        defaultValue?: unknown;
        type: DataTypes.DataType;
    };
    static uang(disallowNull?: boolean, props?: Props): {
        values?: string[];
        set?: (this: import("sequelize/types").Model<any, any>, val: unknown) => void;
        unique?: string | boolean | {
            name: string;
            msg: string;
        };
        get?: (this: import("sequelize/types").Model<any, any>) => unknown;
        validate?: import("sequelize/types").ModelValidateOptions;
        primaryKey?: boolean;
        autoIncrement?: boolean;
        autoIncrementIdentity?: boolean;
        comment?: string;
        references?: string | import("sequelize/types").ModelAttributeColumnReferencesOptions;
        onUpdate?: string;
        onDelete?: string;
        allowNull: boolean;
        field?: string;
        defaultValue?: unknown;
        type: string | DataTypes.AbstractDataTypeConstructor | DataTypes.AbstractDataType | DataTypes.BigIntDataTypeConstructor;
    };
    static tanggalCheckInCheckOut(disallowNull?: boolean, props?: Props): {
        values?: string[];
        set?: (this: import("sequelize/types").Model<any, any>, val: unknown) => void;
        unique?: string | boolean | {
            name: string;
            msg: string;
        };
        get?: (this: import("sequelize/types").Model<any, any>) => unknown;
        validate?: import("sequelize/types").ModelValidateOptions;
        primaryKey?: boolean;
        autoIncrement?: boolean;
        autoIncrementIdentity?: boolean;
        comment?: string;
        references?: string | import("sequelize/types").ModelAttributeColumnReferencesOptions;
        onUpdate?: string;
        onDelete?: string;
        allowNull: boolean;
        field?: string;
        defaultValue?: unknown;
        type: string | DataTypes.AbstractDataTypeConstructor | DataTypes.AbstractDataType | DataTypes.DateDataTypeConstructor;
    };
    static tanggalBerlaku(disallowNull?: boolean, props?: Props): {
        values?: string[];
        set?: (this: import("sequelize/types").Model<any, any>, val: unknown) => void;
        unique?: string | boolean | {
            name: string;
            msg: string;
        };
        get?: (this: import("sequelize/types").Model<any, any>) => unknown;
        validate?: import("sequelize/types").ModelValidateOptions;
        primaryKey?: boolean;
        autoIncrement?: boolean;
        autoIncrementIdentity?: boolean;
        comment?: string;
        references?: string | import("sequelize/types").ModelAttributeColumnReferencesOptions;
        onUpdate?: string;
        onDelete?: string;
        allowNull: boolean;
        field?: string;
        defaultValue?: unknown;
        type: string | DataTypes.AbstractDataTypeConstructor | DataTypes.AbstractDataType | DataTypes.DateDataTypeConstructor;
    };
    static enum(disallowNull?: boolean, props?: Props): {
      values?: string[];
      set?: (this: import("sequelize/types").Model<any, any>, val: unknown) => void;
      unique?: string | boolean | {
          name: string;
          msg: string;
      };
      get?: (this: import("sequelize/types").Model<any, any>) => unknown;
      validate?: import("sequelize/types").ModelValidateOptions;
      primaryKey?: boolean;
      autoIncrement?: boolean;
      autoIncrementIdentity?: boolean;
      comment?: string;
      references?: string | import("sequelize/types").ModelAttributeColumnReferencesOptions;
      onUpdate?: string;
      onDelete?: string;
      allowNull: boolean;
      field?: string;
      defaultValue?: unknown;
      type: string | DataTypes.AbstractDataTypeConstructor | DataTypes.AbstractDataType | DataTypes.BigIntDataTypeConstructor;
  };
}
export default SequelizeType;
