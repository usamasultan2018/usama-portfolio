import emailjs from "@emailjs/browser";

export const formateDate = (date: Date) => {
  return (
    date.toLocaleString("default", { weekday: "long" }) +
    " " +
    date.getDate() +
    ", " +
    date.toLocaleString("default", { month: "short" }) +
    " " +
    date.getFullYear()
  );
};

const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID!;
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY!;
const templateIdEnv = process.env.NEXT_PUBLIC_TEMPLATE_ID!;

if (!serviceId || !publicKey || !templateIdEnv) {
  throw new Error("Missing EmailJS environment variables");
}

interface EmailFields {
  templateId?: string; // optional so we can fallback to env
  data: { [key: string]: string };
}

export const sendEmail = async ({ templateId, data }: EmailFields) => {
  try {
    const res = await emailjs.send(
      serviceId,
      templateId || templateIdEnv,
      {
        ...data,
        time: formateDate(new Date()),
      },
      publicKey 
    );

    return res.status === 200;
  } catch (err) {
    console.error("Error in form submit:", err);
    return false;
  }
};
