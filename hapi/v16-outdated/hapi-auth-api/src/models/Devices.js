export default function(sequelize, DataTypes) {
    
    /* sequelize model properties */
    const Constraints = {
        dev_mac: {
            type: DataTypes.STRING(50), //*pk*
            primaryKey: true,
        },
        dev_nickname: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
        dev_discription: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
    };

    /* sequelize model options */
    const Options = {
        timestamps: false,
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
    };

    /* define model */
    const Devices = sequelize.define('Devices', Constraints, Options);

    return Devices;
};
