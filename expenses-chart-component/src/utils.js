import json from "./data.json";

export const backgrounds = new Array(7).fill(null).map((_, index) => {
  if (new Date().getDay() - 1 === index) {
    return "hsl(186, 34%, 60%)";
  }

  return "hsl(10, 79%, 65%)";
});

export const hoverBackgrounds = new Array(7).fill(null).map((_, index) => {
  if (new Date().getDay() - 1 === index) {
    return "hsl(186, 49%, 80%)";
  }

  return "hsl(10, 100%, 76%)";
});

export const expenses = json.map((entry) => entry.amount);

export const weekdays = json.map((entry) => entry.day);

export const chartConfig = {
  type: "bar",
  data: {
    labels: weekdays,
    title: {
      display: false,
    },
    datasets: [
      {
        borderSkipped: false,
        data: expenses,
        backgroundColor: backgrounds,
        borderRadius: 5,
        hoverBackgroundColor: hoverBackgrounds,
      },
    ],
  },
  options: {
    layout: {
      padding: {
        top: 30,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        xAlign: "center",
        yAlign: "bottom",
        displayColors: false,
        titleAlign: "center",
        caretSize: 0,
        caretPadding: 10,
        backgroundColor: "hsl(25, 47%, 15%)",
        padding: 10,
        titleColor: "hsl(33, 100%, 98%)",
        bodyFont: {
          family: "DM Sans",
          size: 18,
          weight: 700,
        },
        callbacks: {
          title: () => null,
          label: (context) => `$${context.formattedValue}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 15,
            family: "DM Sans",
          },
          color: "hsl(28, 10%, 53%)",
        },
      },
    },
  },
};
