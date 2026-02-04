import { LineChartIllustration } from "../../public/images/LineChartIllustration"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRoot,
  TableRow,
} from "@/components/Table"

const summary = [
  {
    name: "Page /",
    value: "2 840 visiteurs",
    planted: "5 920 pages vues",
    water: "1 min 32 s",
    yield: "+8,4 %",
    efficiency: "2,8 %",
    nutrients: "+6,1 %",
    bgColor: "bg-amber-500",
    changeType: "positive",
  },
  {
    name: "Page /pricing",
    value: "1 920 visiteurs",
    planted: "3 410 pages vues",
    water: "1 min 08 s",
    yield: "+3,2 %",
    efficiency: "2,1 %",
    nutrients: "+4,3 %",
    bgColor: "bg-emerald-500",
    changeType: "positive",
  },
  {
    name: "Page /blog",
    value: "680 visiteurs",
    planted: "1 240 pages vues",
    water: "58 s",
    yield: "-2,4 %",
    efficiency: "1,4 %",
    nutrients: "-1,1 %",
    bgColor: "bg-yellow-400",
    changeType: "negative",
  },
]

export default function FieldPerformance() {
  return (
    <div className="h-[420px] sm:h-150 shrink-0 overflow-hidden mask-[radial-gradient(white_30%,transparent_90%)] perspective-[4000px] perspective-origin-center">
      <div className="-translate-y-10 -translate-z-10 rotate-x-10 rotate-y-20 -rotate-z-10 transform-3d">
        <h3 className="text-sm text-gray-500">
          Performance du trafic par page
        </h3>
        <p className="mt-1 text-3xl font-semibold text-gray-900">
          2 487 visiteurs
        </p>
        <p className="mt-1 text-sm font-medium">
          <span className="text-emerald-700">+180 visiteurs (7,8 %)</span>{" "}
          <span className="font-normal text-gray-500">
            30 derniers jours
          </span>
        </p>
        <LineChartIllustration className="mt-8 w-full min-w-0 sm:min-w-200 shrink-0" />

        <TableRoot className="mt-6 w-full sm:min-w-200">
          <Table>
            <TableHead>
              <TableRow>
                <TableHeaderCell>Page</TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Visiteurs
                </TableHeaderCell>
                <TableHeaderCell className="text-right">Pages vues</TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Temps moyen
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Variation
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Taux de clic
                </TableHeaderCell>
                <TableHeaderCell className="text-right">
                  Conversion
                </TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {summary.map((item) => (
                <TableRow key={item.name}>
                  <TableCell className="font-medium text-gray-900">
                    <div className="flex space-x-3">
                      <span
                        className={item.bgColor + " w-1 shrink-0 rounded"}
                        aria-hidden="true"
                      />
                      <span>{item.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{item.value}</TableCell>
                  <TableCell className="text-right">{item.planted}</TableCell>
                  <TableCell className="text-right">{item.water}</TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        item.changeType === "positive"
                          ? "text-emerald-700"
                          : "text-red-700"
                      }
                    >
                      {item.yield}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        item.changeType === "positive"
                          ? "text-emerald-700"
                          : "text-red-700"
                      }
                    >
                      {item.efficiency}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <span
                      className={
                        item.changeType === "positive"
                          ? "text-emerald-700"
                          : "text-red-700"
                      }
                    >
                      {item.nutrients}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableRoot>
      </div>
    </div>
  )
}
