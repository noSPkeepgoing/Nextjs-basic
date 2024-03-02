import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}&copy; Learning Next Js!</div>;
}
