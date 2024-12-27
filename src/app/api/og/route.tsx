import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FAFAFA",
            backgroundImage:
              'url("https://alesbucket.com/white-paper-texture.jpg")',
            backgroundSize: "cover",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px 50px",
            }}
          >
            <h1
              style={{
                fontSize: 60,
                fontWeight: "bold",
                color: "#333",
                textAlign: "center",
                marginBottom: 20,
              }}
            >
              ale's bucket list
            </h1>
            <p
              style={{
                fontSize: 30,
                color: "#666",
                textAlign: "center",
              }}
            >
              things i wanna do before i die
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
