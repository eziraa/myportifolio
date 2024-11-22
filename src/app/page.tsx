"use client"
import { Button } from "@/components/ui/button";
import Photo from "@/components/ui/Photo";
import Social from "@/components/ui/Social";
import Stats from "@/components/ui/Stats";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  const handleDownload = async () => {
    const response = await fetch("/assets/cv.pdf");
    if (response)
    {
      const reader = response.body?.getReader();

      let receivedLength = 0;
      const chunks = [];
      while (reader)
      {
        const { done, value } = await reader.read();

        if (done)
        {
          break;
        }

        chunks.push(value);
        receivedLength += value.length;
      }
      const chunksAll = new Uint8Array(receivedLength);
      let position = 0;
      for (const chunk of chunks)
      {
        chunksAll.set(chunk, position);
        position += chunk.length;
      }

      // Create a blob from the chunks
      const blob = new Blob([chunksAll]);
      const download_url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = download_url;
      link.download = "CV" + ".pdf";
      document.body.appendChild(link);
      link.click();

      // Cleanup
      window.URL.revokeObjectURL(download_url);
      document.body.removeChild(link);
    }
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full ">
        <div className=" flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I&apos;m <br />
              <span className="text-accent">Ezira Tigab</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiances and I am profient
              in varios programming laguages and technologies
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="capitalize flex items-center gap-2"
                onClick={() => {
                  handleDownload();
                }}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="h-9 w-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 "
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
