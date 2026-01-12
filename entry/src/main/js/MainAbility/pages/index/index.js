import Device from '@system.device';

export default {
    data: {
        deviceResult: '',
        combinedResult: '',
        buttonActive : false
    },

    getInfo() {
        Device.getInfo({
            success: (data) => {
                this.deviceResult = data
                console.info(`Device info success: ${JSON.stringify(data)}`);
                this.combinedResult = {
                    'brand' : this.deviceResult.brand,
                    'model' : this.deviceResult.model,
                    'manufacturer' : this.deviceResult.manufacturer,
                    'deviceType': this.deviceResult.deviceType,
                    'language': this.deviceResult.language,
                    'region': this.deviceResult.region,
                    'apiVersion': this.deviceResult.apiVersion

                }

                this.buttonActive = !this.buttonActive;

            },
            fail: (data, code) => {
                this.deviceResult = `Error getting device info:\nCode: ${code}\nData: ${data}`;
            }
        });
    }

};
