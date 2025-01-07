export type Month = {
    id: number;
    name: string;
    items: {
        name: string;
        image: string;
        dateOfBirth: string;
    }[];
};

export let months: Month[] = [
    {
        id: 1,
        name: 'Jan',
        items: [
            {
                name: 'Alice',
                image: 'https://avatar.iran.liara.run/public/82',
                dateOfBirth: '1990-01-15'
            },
            {
                name: 'Bob',
                image: 'https://avatar.iran.liara.run/public/30',
                dateOfBirth: '1988-01-24'
            },
            {
                name: 'Charlie',
                image: 'https://avatar.iran.liara.run/public/31',
                dateOfBirth: '1992-01-10'
            }
        ]
    },
    {
        id: 2,
        name: 'Feb',
        items: [
            {
                name: 'David',
                image: 'https://avatar.iran.liara.run/public/3',
                dateOfBirth: '1991-02-05'
            }
        ]
    },
    {
        id: 3,
        name: 'Mar',
        items: [
            {
                name: 'Eva',
                image: 'https://avatar.iran.liara.run/public/60',
                dateOfBirth: '1993-03-20'
            },
            {
                name: 'Frank',
                image: 'https://avatar.iran.liara.run/public/39',
                dateOfBirth: '1989-03-15'
            },
            {
                name: 'Grace',
                image: 'https://avatar.iran.liara.run/public/51',
                dateOfBirth: '1995-03-30'
            },
            {
                name: 'Hannah',
                image: 'https://avatar.iran.liara.run/public/94',
                dateOfBirth: '1994-03-22'
            }
        ]
    },
    {
        id: 4,
        name: 'Apr',
        items: [
            {
                name: 'Ivy',
                image: 'https://avatar.iran.liara.run/public/92',
                dateOfBirth: '1992-04-11'
            },
            {
                name: 'Jack',
                image: 'https://avatar.iran.liara.run/public/36',
                dateOfBirth: '1987-04-05'
            }
        ]
    },
    {
        id: 5,
        name: 'May',
        items: [
            {
                name: 'Liam',
                image: 'https://avatar.iran.liara.run/public/75',
                dateOfBirth: '1990-05-03'
            },
            {
                name: 'Mia',
                image: 'https://avatar.iran.liara.run/public/96',
                dateOfBirth: '1992-05-15'
            },
            {
                name: 'Noah',
                image: 'https://avatar.iran.liara.run/public/47',
                dateOfBirth: '1985-05-25'
            }
        ]
    },
    {
        id: 6,
        name: 'Jun',
        items: [
            {
                name: 'Olivia',
                image: 'https://avatar.iran.liara.run/public/58',
                dateOfBirth: '1991-06-09'
            }
        ]
    },
    {
        id: 7,
        name: 'Jul',
        items: [
            {
                name: 'Penny',
                image: 'https://avatar.iran.liara.run/public/13',
                dateOfBirth: '1989-07-20'
            },
            {
                name: 'Quinn',
                image: 'https://avatar.iran.liara.run/public/93',
                dateOfBirth: '1993-07-04'
            },
            {
                name: 'Riley',
                image: 'https://avatar.iran.liara.run/public/67',
                dateOfBirth: '1988-07-11'
            },
            {
                name: 'Sophia',
                image: 'https://avatar.iran.liara.run/public/89',
                dateOfBirth: '1992-07-15'
            },
            {
                name: 'Toby',
                image: 'https://avatar.iran.liara.run/public/18',
                dateOfBirth: '1994-07-29'
            }
        ]
    },
    {
        id: 8,
        name: 'Aug',
        items: [
            {
                name: 'Uma',
                image: 'https://avatar.iran.liara.run/public/15',
                dateOfBirth: '1995-08-02'
            },
            {
                name: 'Violet',
                image: 'https://avatar.iran.liara.run/public/79',
                dateOfBirth: '1993-08-21'
            }
        ]
    },
    {
        id: 9,
        name: 'Sep',
        items: [
            {
                name: 'Will',
                image: 'https://avatar.iran.liara.run/public/4',
                dateOfBirth: '1987-09-19'
            },
            {
                name: 'Xander',
                image: 'https://avatar.iran.liara.run/public/7',
                dateOfBirth: '1991-09-14'
            }
        ]
    },
    {
        id: 10,
        name: 'Oct',
        items: [
            {
                name: 'Zoe',
                image: 'https://avatar.iran.liara.run/public/57',
                dateOfBirth: '1985-10-03'
            },
            {
                name: 'Aaron',
                image: 'https://avatar.iran.liara.run/public/21',
                dateOfBirth: '1990-10-16'
            },
            {
                name: 'Bella',
                image: 'https://avatar.iran.liara.run/public/91',
                dateOfBirth: '1992-10-22'
            },
            {
                name: 'Cody',
                image: 'https://avatar.iran.liara.run/public/26',
                dateOfBirth: '1994-10-30'
            }
        ]
    },
    {
        id: 11,
        name: 'Nov',
        items: [
            {
                name: 'Yara',
                image: 'https://avatar.iran.liara.run/public/20',
                dateOfBirth: '1992-11-12'
            }
        ]
    },
    {
        id: 12,
        name: 'Dec',
        items: [
            {
                name: 'Diana',
                image: 'https://avatar.iran.liara.run/public/95',
                dateOfBirth: '1991-12-05'
            },
            {
                name: 'Ethan',
                image: 'https://avatar.iran.liara.run/public/41',
                dateOfBirth: '1989-12-15'
            },
            {
                name: 'Fiona',
                image: 'https://avatar.iran.liara.run/public/88',
                dateOfBirth: '1992-12-25'
            }
        ]
    }
];

export let getCurrentMonth = () => {
    let currentMonth = new Date().getMonth();
    return currentMonth;
};

export let formatDate = (dateOfBirth: string): string => {
    const date = new Date(dateOfBirth);
    const options: Intl.DateTimeFormatOptions = {
        month: "long", // 'long' gives full month name
        day: "numeric", // numeric gives the day without leading zeros
    };
    return date.toLocaleDateString("en-US", options);
};

export let calculateAge = (dateOfBirth: string): number => {
    if (!dateOfBirth) return 0; // Handle empty dateOfBirth

    const birthDate = new Date(dateOfBirth);
    if (isNaN(birthDate.getTime())) return 0; // Check if the date is valid

    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    return age;
};

export let getRemainingDays = (dateOfBirth: string): number => {
    if (!dateOfBirth) return -1; // Handle empty dateOfBirth

    const today = new Date();
    const birthDateThisYear = new Date(
        today.getFullYear(),
        new Date(dateOfBirth).getMonth(),
        new Date(dateOfBirth).getDate()
    );

    // If the birthday has already occurred this year, calculate for next year
    if (birthDateThisYear < today) {
        birthDateThisYear.setFullYear(today.getFullYear() + 1);
    }

    // Calculate the difference in time
    const differenceInTime = birthDateThisYear.getTime() - today.getTime();
    if (differenceInTime < 0) return -1; // Handle any negative difference

    // Convert time difference to days
    return Math.ceil(differenceInTime / (1000 * 3600 * 24));
};