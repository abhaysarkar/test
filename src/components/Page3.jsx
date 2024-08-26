import Categories from "./Categories";

const Page3 = () => {
    const containerStyle = {
        backgroundColor: 'darkgray', // Or any dark color you prefer
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        padding: '5%'



    };


    const categories = [
        {
            id: 1,
            name: 'Category 1',
            subcategories: [
                { id: 1, name: 'Subcategory 1-1' },
                { id: 2, name: 'Subcategory 1-2' },
                { id: 3, name: 'Subcategory 1-3' },
                { id: 4, name: 'Subcategory 1-4' },
                { id: 5, name: 'Subcategory 1-5' },
                { id: 6, name: 'Subcategory 1-6' },
                { id: 7, name: 'Subcategory 1-7' },
                { id: 8, name: 'Subcategory 1-8' },
                { id: 9, name: 'Subcategory 1-9' },
                { id: 10, name: 'Subcategory 1-10' },
                { id: 11, name: 'Subcategory 1-11' },
                { id: 12, name: 'Subcategory 1-12' },
                { id: 13, name: 'Subcategory 1-13' },
                { id: 14, name: 'Subcategory 1-14' }
            ]
        },
        {
            id: 2,
            name: 'Category 2',
            subcategories: [
                { id: 15, name: 'Subcategory 2-1' },
                { id: 16, name: 'Subcategory 2-2' }
            ]
        },

        {
            id: 3,
            name: 'Category 1',
            subcategories: [
                { id: 17, name: 'Subcategory 1-1' },
                { id: 18, name: 'Subcategory 1-2' }
            ]
        },
        {
            id: 4,
            name: 'Category 2',
            subcategories: [
                { id: 19, name: 'Subcategory 2-1' },
                { id: 20, name: 'Subcategory 2-2' }
            ]
        }
    ];


    return (
        <div style={containerStyle}>
            <h1 className="text-danger text-center">Page3</h1>

            <Categories categories={categories} />
        </div>
    );
}

export default Page3;
