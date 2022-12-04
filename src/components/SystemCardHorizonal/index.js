import AnimatedStar from '../AnimatedStar';
import style from './style.module.scss';

const SystemCardHorizontal = ({
  pl_name,
  releasedate,
  pl_rade,
  hostname,
  sy_refname,
  st_refname,
  sy_snum,
  sy_pnum,
  sy_mnum,
  st_spectype,
}) => {
  return (
    <div className="card text-white bg-transparent mb-3">
      <div className="row g-0">
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">Host System: {hostname}</h1>
            <div className="row">
              <div className="col-md-4">
                <dl>
                  <dt>Planets:</dt>
                  <dd>{sy_pnum || '0'}</dd>
                  <dt>Spectral Type:</dt>
                  <dd>{st_spectype || '-'}</dd>
                </dl>
              </div>
              <div className="col-md-4">
                <dl>
                  <dt>Moons:</dt>
                  <dd>{sy_mnum || '0'}</dd>
                  <dt>System Reference</dt>
                  <dd
                    dangerouslySetInnerHTML={{
                      __html: sy_refname || '-',
                    }}
                  />
                </dl>
              </div>
              <div className="col-md-4">
                <dl>
                  <dt>Stars:</dt>
                  <dd>{sy_snum || '0'}</dd>
                  <dt>Star Reference</dt>
                  <dd
                    dangerouslySetInnerHTML={{
                      __html: st_refname || '-',
                    }}
                  />
                </dl>
              </div>
            </div>
          </div>
        </div>
        <div className={`col-md-4 ${style.wrapper}`}>
          <AnimatedStar />
        </div>
      </div>
    </div>
  );
};

export default SystemCardHorizontal;
