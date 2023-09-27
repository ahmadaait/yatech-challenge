import { DataTypes, ModelAttributeColumnOptions } from 'sequelize'

type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
type Props = WithOptional<ModelAttributeColumnOptions, 'type'>

class SequelizeType {
  static primaryKeyInteger(disallowNull?: boolean, props?: Props) {
    return {
      allowNull: !disallowNull,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      ...(props || {}),
    }
  }

  static foreignKeyUUID(disallowNull?: boolean, props?: Props) {
    return {
      allowNull: !disallowNull,
      type: DataTypes.UUID,
      ...props,
    }
  }

  static integer(disallowNull?: boolean, props?: Props) {
    return {
      allowNull: !disallowNull,
      type: DataTypes.INTEGER,
      ...props,
    }
  }

  static float(disallowNull?: boolean, props?: Props) {
    return {
      allowNull: !disallowNull,
      type: DataTypes.FLOAT,
      ...props,
    }
  }

  static decimal(disallowNull?: boolean, props?: Props) {
    return {
      allowNull: !disallowNull,
      type: DataTypes.DECIMAL(12,3),
      ...props,
    }
  }

  static boolean(disallowNull?: boolean, props?: Props) {
    return {
      allowNull: !disallowNull,
      type: DataTypes.BOOLEAN,
      ...props,
    }
  }

  static text(disallowNull?: boolean, props?: Props) {
    return {
      allowNull: !disallowNull,
      type: DataTypes.TEXT,
      ...props,
    }
  }

  static string(disallowNull?: boolean, props?: Props) {
    return {
      allowNull: !disallowNull,
      type: DataTypes.STRING,
      ...props,
    }
  }

  static json(disallowNull?: boolean, props?: Props) {
    return {
      allowNull: !disallowNull,
      type: DataTypes.JSON,
      ...props,
    }
  }

  static phoneNumber(disallowNull?: boolean, props?: Props) {
    return this.string(disallowNull, props)
  }

  static email(disallowNull?: boolean, props?: Props) {
    return this.string(disallowNull, props)
  }

  static date(disallowNull?: boolean, props?: Props) {
    return {
      allowNull: !disallowNull,
      type: DataTypes.DATE,
      ...props,
    }
  }

  static time(disallowNull?: boolean, props?: Props) {
    return {
      allowNull: !disallowNull,
      type: DataTypes.TIME,
      ...props,
    }
  }

  static uang(disallowNull?: boolean, props?: Props) {
    return {
      allowNull: !disallowNull,
      type: DataTypes.BIGINT,
      ...props,
    }
  }

  static tanggalCheckInCheckOut(disallowNull?: boolean, props?: Props) {
    return this.date(disallowNull, props)
  }

  static tanggalBerlaku(disallowNull?: boolean, props?: Props) {
    return this.date(disallowNull, props)
  }

  static enum(disallowNull?: boolean, props?: Props) {
    return {
      allowNull: !disallowNull,
      type: DataTypes.ENUM,
      ...props,
    }
  }
}

export default SequelizeType
