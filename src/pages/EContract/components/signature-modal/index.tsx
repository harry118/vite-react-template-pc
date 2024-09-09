import { Modal } from "antd";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import SignatureCanvas from "react-signature-canvas";
import React, {
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useResizeObserver } from "@wojtekmaj/react-hooks";
import "./index.less";

const SignatureModal = (props: { canvasProps: any }) => {
  // Use a hook to manage the modal state
  const modal = useModal();
  const signCanvasRef = useRef<any>();
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerSize, setContainerSize] = useState<any>({
    width: 0,
    height: 0,
  });
  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;
    if (!entry) return;
    setContainerSize({
      width: Math.round(entry.contentRect.width),
      height: Math.round(entry.contentRect.height) - 5, // magic px exist
    });
  }, []);
  useResizeObserver(containerRef, undefined, onResize);

  const getBase64Image = useCallback(() => {
    return signCanvasRef.current.getCanvas().toDataURL("image/png");
  }, []);
  const handleDrawOnend = () => {
    signCanvasRef.current.getCanvas().toDataURL("image/png");
    console.log("img", signCanvasRef.current.getCanvas().toDataURL("image/png"))
  };
  //   useImperativeHandle(
  //     ref,
  //     () => ({
  //       ...(signCanvasRef.current || {}),
  //       getBase64Image,
  //     }),
  //     [signCanvasRef, getBase64Image]
  //   );
  return (
    <Modal
      title="Hello Antd"
      onOk={() => modal.hide()}
      open={modal.visible}
      onCancel={() => modal.hide()}
      afterClose={() => modal.remove()}
    >
      <div className="signature-container">
        <SignatureCanvas
          penColor="black"
          ref={signCanvasRef}
          onEnd={handleDrawOnend}
          canvasProps={{
            ...(props?.canvasProps || {}),
            width: 330,
            height: 190,
            // width: containerSize?.width,
            // height: containerSize?.height,
          }}
        />
      </div>
    </Modal>
  );
};

export default NiceModal.create(SignatureModal);
