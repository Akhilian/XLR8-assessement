import React from 'react';
import { default as CapabilityResultComponent } from "./CapabilityResult";

export default {
  title: 'Capability Results',
};

export const CapabilityResult = () => <CapabilityResultComponent />

CapabilityResult.story = {
  name: 'Without any props',
};
