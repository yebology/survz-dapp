import { AnchorProvider } from "@coral-xyz/anchor";
import { commitmentLevel, connection } from "./constants";

export function getProvider(wallet: any) {
  if (!wallet) {
    console.log("Wallet not connected.")
    return;
  }
  const provider = new AnchorProvider(connection, wallet, {
    preflightCommitment: commitmentLevel,
  });
  return provider;
}

export function truncate(
  text: string,
  startChar: number,
  endChar: number,
  maxLength: number
) {
  if (text.length > maxLength) {
    let start = text.substring(0, startChar);
    let end = text.substring(text.length - endChar, text.length);
    while (start.length + end.length < maxLength) {
      start = start + ".";
    }
    return start + end;
  }
  return text;
}

export function timestampToDateConverter(timestamp: number) {
  const date = new Date(timestamp * 1000);
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
