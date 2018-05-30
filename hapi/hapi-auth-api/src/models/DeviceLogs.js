export default function(sequelize, DataTypes) {
    
    /* sequelize model properties */
    const Constraints = {
        reg_date: {
            type: DataTypes.DATE(6),  //*pk* //yyyy-mm-dd hh:mm:ss.000000
            primaryKey: true,
        },
        dev_mac: {
            type: DataTypes.STRING(50),  //fk
            primaryKey: true,
        },
        log_data: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
    };

    /* sequelize model options */
    const Options = {
        timestamps: false,
        charset: 'utf8',
        collate: 'utf8_unicode_ci',
    };

    /* define model */
    const DeviceLogs = sequelize.define('DeviceLogs', Constraints, Options);

    return DeviceLogs;
};
