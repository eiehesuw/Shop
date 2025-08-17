import "./CatalogHeader.scss";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CatalogHeader = () => {
    const sections = useSelector((state) => state.products.sections);
    
    return (
        <div className="catalog-header">
            <div className="catalog-header__navigation">
                {sections && sections.map((section, index) => (
                    <div className={"catalog-header__navigation-item" + (section.selected ? ' catalog-header__navigation-item--active' : '')} key={index}>
                        <Link to={section.code === 'all' ? '/' : `/${section.code}/`}>{section.code}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CatalogHeader;
