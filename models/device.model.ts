interface Device {
  name: string;
  type: string;
  temp: <>;
  metadata: Record<string, any>;
}

interface DeviceModel extends Device, {}

const deviceSchema = new Schema<DeviceModel>({
  name: { type: String, required: true },
  type: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  metadata: { type: Schema.Types.Mixed },
});

const Device: Model<DeviceModel> = model<DeviceModel>('Device', deviceSchema);

export default Device;
