/*
 * Copyright 2011-2019 GatlingCorp (https://gatling.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package studydatalake

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class EnhancedJava256Api extends Simulation {

  val httpProtocol = http
    .baseUrl("https://44k9ld7lgi.execute-api.us-east-1.amazonaws.com/prod") // Here is the root for all relative URLs

    val headers = Map("Authorization" -> "Bearer eyJraWQiOiJXekcxVGU1clwvZTFQTFJ2b3pWclViNTZrZ3JjQkNyOXRnZ3owcEJKTTg0MD0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI1NzAzMDFiZS03ODUwLTQ5MzgtYWRiZi0xMDE0OTgyOTllYjMiLCJhdWQiOiI0dGxyZW01MXNtdThtM2hnMjZkZW9uOWhvaCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZXZlbnRfaWQiOiJjZjNjYTM5NC0zMzAwLTQyOGItYmE4Yy0xNzQ3MjdjOTZhZjEiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTYwMDM2MzI2NCwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tXC91cy1lYXN0LTFfNnFGbXF5RVluIiwiY29nbml0bzp1c2VybmFtZSI6InBsYXJlbnRpcyIsImV4cCI6MTYwMDM2Njg2NCwiaWF0IjoxNjAwMzYzMjY0LCJlbWFpbCI6InBsYXJlbnRpc0BnbWFpbC5jb20ifQ.DujnxEUjXM2I58ZjQa8xL3sfUkIkUMlwK2XKfV62VypacR8YPvTUYNxa088LEVquVdHd9rzve5mb_IBi2hFm23AEMLJiKuuOZkhwStYBmiY0-_n10Li5s1E9QdxMetereS3QttJT0tUqMFBBb5shxBvUkbInwxXFYVC-z2yam_cNSBFFkB7QZFurEFAVNRLqTvcDXuE3XfadhcBUS5xzkxLOSOTFz8NVCGSjfw97z_1NDhJ5Lpy0cZzuKvwDHYTq7rO1TtrwiyS7yqGt8GzDcEoFjFsUR-R5eRvR4GsqRmD0gR0Z5Yqcqvczo11Se949iGqnhIV3Ro8IBmP4i2dkQQ")

  val scn = scenario("EnhancedJava256Api")
    .exec(
      http("request_1")
        .get("/study/DynamoDB/findByTag?tag=RCU")
        .headers(headers)
    )

  setUp(scn.inject(rampUsersPerSec(15) to(200) during(180 seconds)).protocols(httpProtocol))
}
