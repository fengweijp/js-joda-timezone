import { expect } from 'chai';

import { ZoneRules } from 'js-joda';
import { MomentZoneRules } from '../src/MomentZoneRules';
import { MomentZoneRulesProvider } from '../src/MomentZoneRulesProvider';

describe('MomentZoneRulesProvider', () => {

    context('getRules', () => {

        it('should return an instance of MomentZoneRules', () => {
            const zoneRules = MomentZoneRulesProvider.getRules('Europe/Berlin');
            expect(zoneRules).to.be.instanceOf(ZoneRules);
            expect(zoneRules).to.be.instanceOf(MomentZoneRules);
        });

    });

});