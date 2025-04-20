import {
    mailOptions,
    transporter,
  } from "../../emails/contact-us-form/contact-us-form";
  import { replaceMergeTags, stripHTMLTags } from "../../emails/helpers";
  
  import { NextResponse } from "next/server";
  import fs from "fs";
  import path from "path";
  
  export async function POST(request) {
    const data = await request.json();
  
    // get html template
    const htmlFilePath = path.join(
      process.cwd(),
      "emails/contact-us-form",
      "form-template.html"
    );
  
    let htmlContent = fs.readFileSync(
      htmlFilePath,
      "utf8",
      (err, htmlContent) => {
        if (err) {
          console.error("Error reading HTML file: ", err);
          return;
        }
      }
    );
  
    // replace merge tags with values
    htmlContent = replaceMergeTags(data, htmlContent);
    const plainTextContent = stripHTMLTags(htmlContent);
  
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `Contact Us Form Enquiry`,
        text: plainTextContent,
        html: htmlContent,
      });
  
      return NextResponse.json({ success: true }, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json({ error: err.message }, { status: err.status });
    }
  }
  