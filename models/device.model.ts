interface Device {
  name: String;
  type: String;
  temp?: Number;
  metadata?: Record<string, any>;
}

export default Device;
