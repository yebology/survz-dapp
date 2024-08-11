import { AnchorProvider } from "@coral-xyz/anchor";
import { commitmentLevel, connection } from "./constants";

export function truncateAccount() {}

export async function getProvider() {
  if (!wallet) {
    console.error("Wallet not connected.");
    return null;
  }
  const provider = new AnchorProvider(connection, wallet, {
    preflightCommitment: commitmentLevel,
  });
  return provider;
}

export function timestampToDateConverter(timestamp: number) {
  const date = new Date(timestamp);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate().toString().padStart(2, "0");
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const today = new Date();
  const tomorrow = new Date();

  tomorrow.setDate(today.getDate() + 1);
  today.setHours(0, 0, 0, 0);
  tomorrow.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);

  let dayLabel;
  if (date.getTime() === today.getTime()) {
    dayLabel = "Today";
  } else if (date.getTime() == tomorrow.getTime()) {
    dayLabel = "Tomorrow";
  } else {
    dayLabel = `${day} ${month} ${year}`;
  }

  const formatedDateTime = `${dayLabel} at ${hours}:${minutes}`;
  return formatedDateTime;
}
