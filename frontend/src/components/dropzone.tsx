import { useDropzone } from "react-dropzone";
import UploadIcon from "./icons/upload";

interface DropzoneInterface {
  onDrop: (acceptedFiles: any, rejectedFiles: any) => void;
}

function DropZone({ onDrop }: DropzoneInterface) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className="hover:cursor-pointer border border-dotted border-white p-6 mt-4"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <div className="flex justify-center">
          <UploadIcon className="mr-2" />{" "}
          <span className="text-white">
            Drag 'n' drop some files here, or click to select files
          </span>
        </div>
      )}
    </div>
  );
}
export default DropZone;
