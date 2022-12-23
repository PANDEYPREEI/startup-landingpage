import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "37026348727-n70sh0nm5j4queoeblgkoff1lk5iuq8e.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    FacebookProvider({
      clientId: "669638308218640",
      clientSecret: "80a80d0bd2c9e297ae75fbe05deb171d",
    }),
  ],
  secret: process.env.JWT_SECRET,
});
