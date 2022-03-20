import React from 'react';
import './style.css';
import { Card, Grid } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
export default function App() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'blue',
          padding: '35px',
          borderRadius: '10px',
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <Card variant="outlined" className="card">
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  style={{ textAlign: 'center' }}
                >
                  Free
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  style={{ textAlign: 'center' }}
                >
                  $0<span className="suffix">/month</span>
                </Typography>
                <div className="hori-line"></div>
                <div style={{ padding: '30px' }}>
                  <Typography variant="body2">
                    <div className="displayFlex">
                      <DoneIcon fontSize="small" /> <div>Single User</div>
                    </div>
                    <div className="displayFlex">
                      <DoneIcon fontSize="small" />
                      <div>5GB Storage</div>
                    </div>
                    <div className="displayFlex">
                      <DoneIcon fontSize="small" />
                      <div>Unlimited Public Projects</div>
                    </div>
                    <div className="displayFlex">
                      <DoneIcon fontSize="small" />
                      <div>Community Access</div>
                    </div>
                    <div className="displayFlex not-included ">
                      <CloseIcon />
                      <div>Unlimited Private Projects</div>
                    </div>
                    <div className="displayFlex not-included ">
                      <CloseIcon />
                      <div>Dedicated Phone Support</div>
                    </div>
                    <div className="displayFlex not-included ">
                      <CloseIcon />
                      <div>Free Subdomain</div>
                    </div>
                    <div className="displayFlex not-included ">
                      <CloseIcon /> <div>Monthly Status Reports</div>
                    </div>
                  </Typography>
                </div>
              </CardContent>
              <CardActions>
                <Button variant="contained" className="btn">
                  Button
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Card variant="outlined" className="card">
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  style={{ textAlign: 'center' }}
                >
                  Plus
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  style={{ textAlign: 'center' }}
                >
                  $9<span className="suffix">/month</span>
                </Typography>
                <div className="hori-line"></div>
                <div style={{ padding: '30px' }}>
                  <Typography variant="body2">
                    <div className="displayFlex">
                      <DoneIcon fontSize="small" />
                      <div>
                        <b>5 Users</b>
                      </div>
                    </div>
                    <div className="displayFlex">
                      <DoneIcon fontSize="small" />
                      <div>50GB Storage</div>
                    </div>
                    <div className="displayFlex">
                      <DoneIcon fontSize="small" />
                      <div>Unlimited Public Projects</div>
                    </div>
                    <div className="displayFlex">
                      <DoneIcon fontSize="small" />
                      <div>Community Access</div>
                    </div>
                    <div className="displayFlex">
                      <DoneIcon fontSize="small" />
                      <div>Unlimited Private Projects</div>
                    </div>
                    <div className="displayFlex">
                      <DoneIcon fontSize="small" />
                      <div>Dedicated Phone Support</div>
                    </div>
                    <div className="displayFlex">
                      <DoneIcon fontSize="small" />
                      <div>Free Subdomain</div>
                    </div>

                    <div className="displayFlex not-included">
                      <CloseIcon /> <div>Monthly Status Reports</div>
                    </div>
                  </Typography>
                </div>
              </CardContent>
              <CardActions>
                <Button variant="contained" className="btn">
                  Button
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item>
            <Card variant="outlined" className="card">
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  style={{ textAlign: 'center' }}
                >
                  Pro
                </Typography>
                <Typography
                  variant="h5"
                  component="div"
                  style={{ textAlign: 'center' }}
                >
                  $49<span className="suffix">/month</span>
                </Typography>
                <div className="hori-line"></div>
                <div style={{ padding: '30px' }}>
                  <Typography variant="body2">
                    <div className="displayFlex">
                      <DoneIcon fontSize="small" />
                      <div>
                        <b>Unlimited Users</b>
                      </div>
                    </div>
                    <div className="displayFlex">
                      <DoneIcon fontSize="small" /> <div>150GB Storage</div>
                    </div>
                    <div className="displayFlex">
                      <DoneIcon fontSize="small" />
                      <div>Unlimited Public Projects</div>
                    </div>
                    <div className="displayFlex">
                      <DoneIcon fontSize="small" />
                      <div>Community Access</div>
                    </div>
                    <div className="displayFlex">
                      <DoneIcon fontSize="small" />
                      <div>Unlimited Private Projects</div>
                    </div>
                    <div className="displayFlex">
                      <DoneIcon fontSize="small" />
                      <div>Dedicated Phone Support</div>
                    </div>
                    <div className="displayFlex">
                      <DoneIcon fontSize="small" />
                      <div>
                        <b>Unlimited</b> Free Subdomain
                      </div>
                    </div>
                    <div className="displayFlex">
                      <DoneIcon fontSize="small" />
                      <div>Monthly Status Reports</div>
                    </div>
                  </Typography>
                </div>
              </CardContent>
              <CardActions>
                <Button variant="contained" className="btn">
                  Button
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
