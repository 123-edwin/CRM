import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Button from "@mui/joy/Button";
import SvgIcon from "@mui/joy/SvgIcon";
import { styled } from "@mui/joy";

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

export function ImportExp() {
  return (
    <>
      {/*Titulo*/}

      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Typography level="h3">Import Expenses</Typography>
      </Box>

      <Card
        sx={{
          width: "86%",
          mx: "auto",
          p: 2,
          borderRadius: "md",
          boxShadow: "md",
          overflowX: "auto",
          mt: 3,
        }}
      >
        {/*TABLA*/}

        <div className="only-table">
          <table className="table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Amount</th>
                <th>Tax</th>
                <th>Tax 2</th>
                <th>Reference no</th>
                <th>Note</th>
                <th>Costumer</th>
                <th>Billable</th>
                <th>Payment mode</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
                <td>Sample Data</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Button
          component="label"
          role={undefined}
          tabIndex={-1}
          variant="outlined"
          color="neutral"
          startDecorator={
            <SvgIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
            </SvgIcon>
          }
        >
          Elija archivo CSV
          <VisuallyHiddenInput type="file" />
        </Button>

        {/*BOTONES*/}

        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 3 }}>
          <Button onClick={function () {}}>Importar</Button>

          <Button onClick={function () {}} variant="outlined">
            Simular importación
          </Button>
        </Box>
      </Card>
    </>
  );
}
