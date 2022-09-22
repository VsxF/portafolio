import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { InfoContainer, Plus, SectionDetails, SectionTitle, } from "./style";

const ItemInfo:FC = () => {
    const [ open, setOpen ] = useState(-1);
    const [t, i18] = useTranslation('global');
    const infoSections = [
        t('ecommerce.detailsPage.description'),
        t('ecommerce.detailsPage.info'),
        t('ecommerce.detailsPage.dimensions'),
        t('ecommerce.detailsPage.features')
    ]

    return (
        <InfoContainer>
            { infoSections.map((section, index) => 
                <InfoSection
                    key={index}
                    open={ open === index }
                    setOpen={ () => setOpen( open => open === index ? -1 : index ) }
            >{ section }</InfoSection>
            )}
        </InfoContainer>
    )
}

const InfoSection:FC<{ children: string, open: boolean, setOpen: Function  }> = ({children, open, setOpen}) => {
    return (
        <>
            <SectionTitle onClick={ () => setOpen() }>
                { children }
                <Plus less={open} />          
            </SectionTitle>
            {/* ask for title as prop and description as child */}
            <SectionDetails open={open}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </SectionDetails>
        </>
    )
}

export default ItemInfo;