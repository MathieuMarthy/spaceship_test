import type { Category } from '/categories';
import { categories } from './categories';

export type Room = {
	category: Category;
	points: string;
};

export const rooms: Room[] = [
	{
		category: categories.cafeteria,
		points: "1352,146,1477,19,1876,19,2059,201,2059,556,1892,723,1505,715,1347,561"
	},
	{
		category: categories.navigation,
		points: "2728,571,2730,865,2844,865,2953,780,2950,653,2847,568"
	},
	{
		category: categories.communication,
		points: "1839,1300,2156,1300,2156,1477,2090,1541,1902,1541,1836,1475"
	},
    {
        category: categories.admin_1,
        points: "1868,805,2025,805,2025,1088,1868,1088"
    },
    {
        category: categories.admin_2,
        points: "2025,805,2183,805,2185,1032,2133,1088,2025,1088"
    },
    {
        category: categories.storage,
        points: "1516,962,1802,959,1802,1541,1553,1541,1418,1412,1421,1055"
    },
    {
        category: categories.reactor,
        points: "436,498,434,604,534,604,534,900,434,900,434,1009,373,1009,259,932,257,572,370,498"
    },
    {
        category: categories.electrical,
        points: "1096,872,1415,872,1418,949,1339,1031,1342,1155,1275,1219,1188,1219,1188,1293,1096,1293"
    },
    {
        category: categories.medbay,
        points: "1040,457,1308,457,1310,618,1415,724,1415,804,1093,804,1042,740"
    },
];
