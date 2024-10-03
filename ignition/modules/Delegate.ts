// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";



const DelegateModule = buildModule("DelegateModule", (m) => {

  const delegate = m.contract("ToBeCalled");

  return { delegate };
});

export default DelegateModule;

/**
 * DelegateModule#ToBeCalled - 0xf14db9A517Be9Bf1C6e0831992f83940575db127
 *   - https://sepolia-blockscout.lisk.com//address/0xf14db9A517Be9Bf1C6e0831992f83940575db127#code
 */