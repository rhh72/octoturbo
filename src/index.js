import React from "react";
import ReactDOM from "react-dom";

import {
  ReactiveBase,
  DataSearch,
  MultiList,
  MultiDataList,
  MultiDropdownList,
  SelectedFilters,
  ReactiveList,
  SingleRange,
  SingleDataList,
  RangeSlider,
  RatingsFilter,
  ToggleButton,
  ResultCard
} from "@appbaseio/reactivesearch";
import { Row, Button, Col, Card, Switch, Tree, Popover, Affix } from "antd";
import "antd/dist/antd.css";

import ExpandCollapse from "react-expand-collapse";

import "./styles.css";

function renderData(res) {
  return (
    <div className="list-item" key={res._id}>
      <ExpandCollapse previewHeight="390px" expandText="Show more">
        <table class="maintable">
          <tr>
            <td class="padright" valign="top" rowSpan="2">
              {res.avatar && res.avatar != "NULL" ? (
                <img
                  width="50px"
                  src={res.avatar.replace(
                    "t_api_images/w_50,h_50,c_scale/",
                    "t_api_images/"
                  )}
                />
              ) : res.url.substring(0, 6) == "Person" ? (
                <img
                  width="50px"
                  src="https://cdn.icon-icons.com/icons2/510/PNG/512/person_icon-icons.com_50075.png"
                />
              ) : (
                <img
                  width="50px"
                  src="https://visualpharm.com/assets/302/Company-595b40b75ba036ed117d5a00.svg"
                />
              )}
            </td>
            <td class="namefont">
              <a target="_parent" href={res.url}>{res.name}</a>
              <div class="icondiv">
                {res.crunchbase &&
                res.crunchbase != "NULL" &&
                res.cruncbase != "nbsp;" ? (
                  res.url.substring(0, 6) == "Person" ? (
                    <a
                      target="_blank"
                      href={"http://crunchbase.com/person/" + res.crunchbase}
                    >
                      <img
                        src={
                          "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-0/p370x247/14238104_10154509878326171_7795750764042171439_n.png?_nc_cat=100&_nc_ht=scontent-sjc3-1.xx&oh=193da79d7563483ba878729156683717&oe=5D138A28"
                        }
                      />
                    </a>
                  ) : (
                    <a
                      target="_blank"
                      href={
                        "http://crunchbase.com/organization/" + res.crunchbase
                      }
                    >
                      <img
                        src={
                          "https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-0/p370x247/14238104_10154509878326171_7795750764042171439_n.png?_nc_cat=100&_nc_ht=scontent-sjc3-1.xx&oh=193da79d7563483ba878729156683717&oe=5D138A28"
                        }
                        alt={""}
                      />
                    </a>
                  )
                ) : null}

                {res.linkedin && res.linkedin != "NULL" ? (
                  <a target="_blank" href={res.linkedin}>
                    <img
                      src={
                        "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                      }
                      alt={""}
                    />
                  </a>
                ) : null}

                {res.facebook && res.facebook != "NULL" ? (
                  <a target="_blank" href={res.facebook}>
                    <img
                      src={
                        "https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png"
                      }
                      alt={""}
                    />
                  </a>
                ) : null}
              </div>
            </td>
          </tr>

          <tr class="rowup">
            <td>
              <div class="jobtitlefont">
                {res.url.substring(0, 6) == "Person" && res.jobtitle != "NULL"
                  ? res.jobtitle + " at " + res.jobcompany
                  : null}
              </div>
              <div>
                <div className="card-bottom">
                  {res.willingness > 0 ? (
                    <div className="card-stars">
                      Willingess:{" "}
                      {res.willingness
                        .replace("5", "A")
                        .replace("4", "B")
                        .replace("3", "C")
                        .replace("2", "D")
                        .replace("0", "F")}
                    </div>
                  ) : null}
                  {res.quality > 0 ? (
                    <div className="card-stars">
                      Quality:{" "}
                      {res.quality
                        .replace("5", "A")
                        .replace("4", "B")
                        .replace("3", "C")
                        .replace("2", "D")
                        .replace("0", "F")}
                    </div>
                  ) : null}
                  {res.lscontactcount > 0 ? (
                    <div className="card-stars">
                      LS Contacts: {res.lscontactcount}
                    </div>
                  ) : null}
                </div>
                {res.categories.length > 0 ? (
                  <div className="card-tags">
                    {res.categories.slice(0, 7).map(topic => (
                      <span className="card-tag" key={`${res.name}-${topic}`}>
                        #{topic}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </td>
          </tr>
        </table>
      </ExpandCollapse>
    </div>
  );
}

const App = () => (
  <ReactiveBase
    app="spotlightsearch"
    credentials="viCwcDpu7:f78f550b-9926-402f-b603-d6bb1aa56d27"
    url="https://scalr.api.appbase.io"
    analytics
  >
    <table class="maintable">
      <tr valign="top">
        
        
        <td>
          <DataSearch
            componentId="search"
            dataField={["name", "jobtitle", "jobcompany", "sector"]}
            fieldWeights={[1]}
            fuzziness={0}
            highlightField={["name"]}
            style={{
              marginBottom: 20
            }}
          />

          <SelectedFilters />

          <ReactiveList
            componentId="result"
            dataField="name"
            pagination={true}
            react={{
              and: [
                "Country",
                "search",
                "Sector",
                "willingness",
                "quality",
                "Region",
                "lsfirstdegree"
              ]
            }}
            renderData={renderData}
            size={20}
            style={{
              marginTop: 20
            }}
          />
        </td>
<td>
          <table class="maintable">
            <tr valign="top">
              <td>
                <SingleRange
                  componentId="lsfirstdegree"
                  dataField="lscontactcount"
                  data={[
                    { start: 1, end: 14, label: "Yes" },
                    { start: 0, end: 0, label: "No" }
                  ]}
                  title="LS First Degree Contact"
                  showFilter={false}
                />
              </td>
              <td>
                <MultiDataList
                  componentId="willingness"
                  dataField="willingness"
                  title="Willingness To Share"
                  data={[
                    {
                      label: "A",
                      value: "5"
                    },
                    {
                      label: "B",
                      value: "4"
                    },
                    {
                      label: "C",
                      value: "3"
                    }
                  ]}
                  showSearch={false}
                  react={{
                    and: [
                      "Country",
                      "search",
                      "Sector",
                      "willingness",
                      "quality",
                      "Region",
                      "lsfirstdegree"
                    ]
                  }}
                />
              </td>
              <td>
                <MultiDataList
                  componentId="quality"
                  dataField="quality"
                  title="Quality of Insight"
                  data={[
                    {
                      label: "A",
                      value: "5"
                    },
                    {
                      label: "B",
                      value: "4"
                    },
                    {
                      label: "C",
                      value: "3"
                    }
                  ]}
                  showSearch={false}
                  react={{
                    and: [
                      "Country",
                      "search",
                      "Sector",
                      "willingness",
                      "quality",
                      "Region",
                      "lsfirstdegree"
                    ]
                  }}
                />
              </td>
            </tr>
          </table>
          <MultiList
            componentId="Sector"
            dataField="categories.keyword"
            placeholder="Search Sectors"
            size={10000}
            style={{
              marginBottom: 20
            }}
            title="By Sector"
            react={{
              and: [
                "Country",
                "search",
                "Sector",
                "willingness",
                "quality",
                "Region",
                "lsfirstdegree"
              ]
            }}
          />
          <MultiList
            componentId="Region"
            dataField="region.keyword"
            placeholder="Search Regions"
            size={10000}
            style={{
              marginBottom: 20
            }}
            title="By Region"
          />
          <MultiList
            componentId="Country"
            dataField="country.keyword"
            placeholder="Search Countries"
            size={10000}
            style={{
              marginBottom: 20
            }}
            title="By Country"
            react={{
              and: [
                "Country",
                "search",
                "Sector",
                "willingness",
                "quality",
                "Region",
                "lsfirstdegree"
              ]
            }}
          />
        </td>
      </tr>
    </table>
  </ReactiveBase>
);

ReactDOM.render(<App />, document.getElementById("root"));
