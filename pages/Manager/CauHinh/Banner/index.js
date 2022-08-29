import { useState } from "react"
import { ContainerManager } from "../../../../components/Styled/style"
import TableBanner from "./Component/Table"
import UploadBanner from "./Component/UploadBanner"

export const Banner = () => {
    const [dataBannerContainer, setDataBannerContainer] = useState([])

    return (

        <ContainerManager>
            <UploadBanner dataBanner={setDataBannerContainer} />
            <TableBanner dataBannerContainer={dataBannerContainer} />
        </ContainerManager>
    )
}